import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from 'redux-logger';
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  category: []
}

const GOT_CATEGORY_FROM_SERVER = 'GOT_CATEGORY_FROM_SERVER';

const setCategory = (category) => {
  return {
    type: GOT_CATEGORY_FROM_SERVER,
    category
  }
}

export const fetchCategory = () => {
  return async(dispatch) => {
    const category = (await axios.get('/api/categories')).data;
    dispatch(setCategory(category));
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === GOT_CATEGORY_FROM_SERVER) {
    const category = action.category;
    return {...state, category};
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware,thunkMiddleware));

export default store;
