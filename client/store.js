import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from 'redux-logger';
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  category: [],
  titles: []
}

const GOT_CATEGORY_FROM_SERVER = 'GOT_CATEGORY_FROM_SERVER';
const GOT_CATEGORY_DETAIL = 'GOT_CATEGORY_DETAIL';

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

const _setCategoryDetail = (titles) => {
  return {
    type: GOT_CATEGORY_DETAIL,
    titles
  }
}

export const setCategoryDetail = (categoryId) => {
  return async(dispatch) => {
    const titles = (await axios.get(`/api/categories/${categoryId}`)).data;
    dispatch(_setCategoryDetail(titles));
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === GOT_CATEGORY_FROM_SERVER) {
    const category = action.category;
    return {...state, category};
  }
  else if (action.type === GOT_CATEGORY_DETAIL) {
    const titles = action.titles;
    return {...state, titles};
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware,thunkMiddleware));

export default store;
