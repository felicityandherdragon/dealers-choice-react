import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from 'redux-logger';
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  category: [],
  titles: [],
  selectedTitle: {},
  newTitle: {}
}

const GOT_CATEGORY_FROM_SERVER = 'GOT_CATEGORY_FROM_SERVER';
const GOT_CATEGORY_DETAIL = 'GOT_CATEGORY_DETAIL';
const GOT_TITLE_DETAIL = 'GOT_TITLE_DETAIL';
const ADD_NEW = 'ADD_NEW';
const DELETE_TITLE = 'DELETE_TITLE';

const _deleteTitle = (selectedTitle) => {
  return {
    type: types.DELETE_TITLE,
    selectedTitle
  }
}

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

const _getTitleDetail = (selectedTitle) => {
  return {
    type: GOT_TITLE_DETAIL,
    selectedTitle
  }
}

export const getTitleDetail = (titleId) => {
  return async(dispatch) => {
    const selectedTitle = (await axios.get(`/api/category/title/${titleId}`)).data;
    dispatch(_getTitleDetail(selectedTitle));
  }
}

const _addNew = (newTitle) => {
  return {
    type: ADD_NEW,
    newTitle
  }
}

export const addNew = (title, history) => {
  return async(dispatch) => {
    console.log(title);
    const newTitle = (await axios.post('/api/add', title)).data;
    console.log(newTitle);
    dispatch(_addNew(newTitle));
    history.push('/');
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
  else if (action.type === GOT_TITLE_DETAIL) {
    const selectedTitle = action.selectedTitle;
    return {...state, selectedTitle};
  }
  else if (action.type === ADD_NEW) {
    const newTitle = action.title;
    return {...state, newTitle};
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware,thunkMiddleware));

export default store;
