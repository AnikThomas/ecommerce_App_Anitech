import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { inventories } from './inventories';
import { reviews } from './reviews';
import { brands } from './brands';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            inventories,
            reviews,
            brands,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}