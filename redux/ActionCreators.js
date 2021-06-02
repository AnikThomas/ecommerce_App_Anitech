import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchReviews = () => dispatch =>{
    return fetch(baseUrl + 'reviews')
        .then(response =>{
                if (response.ok){
                    return response;
                }else{
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)))      
};
export const reviewsFailed = errMess =>({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = (reviews)=>({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const fetchInventories = () => dispatch =>{
    dispatch(inventoriesLoading());
    return fetch(baseUrl + 'inventories')
        .then(response=>{
                if (response.ok){
                    return response;
                }else{
                    const error = new Error(`Error ${response.status}:${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error =>{
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(inventories => dispatch(addInventories(inventories)))
        .catch(error =>dispatch(inventoriesFailed(error.message)));      
};

export const inventoriesLoading = () =>({
    type: ActionTypes.INVENTORIES_LOADING
});
export const inventoriesFailed = errMess => ({
    type: ActionTypes.INVENTORIES_FAILED,
    payload: errMess
});
export const addInventories = inventories =>({
    type: ActionTypes.ADD_INVENTORIES,
    payload: inventories
});

export const fetchBrands = () => dispatch => {
    
    dispatch(brandsLoading());

    return fetch(baseUrl + 'brands')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(brands => dispatch(addBrands(brands)))
        .catch(error => dispatch(brandsFailed(error.message)));
};

export const brandsLoading = () => ({
    type: ActionTypes.BRANDS_LOADING
});

export const brandsFailed = errMess => ({
    type: ActionTypes.BRANDS_FAILED,
    payload: errMess
});

export const addBrands = brands => ({
    type: ActionTypes.ADD_BRANDS,
    payload: brands
});
