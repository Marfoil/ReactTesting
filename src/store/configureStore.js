import { createStore } from 'redux';
import filtersReducer from '../reducers/filters';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(filtersReducer, composeWithDevTools());
