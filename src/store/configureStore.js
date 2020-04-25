import rafflesReducer from '../reducers/raffles';
import {createStore} from 'redux';

export default () => {
    const store = createStore(
        rafflesReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    return store;
};