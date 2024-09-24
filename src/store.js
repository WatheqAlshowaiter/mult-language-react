// src/store.js
import { createStore } from 'redux';

const initialState = {
  language: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
