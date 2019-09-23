import {combineReducers} from 'redux';

import books from './books';
// import genres from './genres';
// import years from './years';
import user from './user';
// import borrow from './borrow';

const rootReducer = combineReducers ({
  books,
//   genres,
//   years,
  user,
//   borrow,
});

export default rootReducer;
