import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer,
  test: {'test': 'test'}
});

export default rootReducer;
