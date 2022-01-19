import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/user';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
