import * as ActionTypes from './ActionTypes';

export const brands = (state = { isLoading: true,
                                    errMess: null,
                                    brands: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BRANDS:
            return {...state, isLoading: false, errMess: null, brands: action.payload};

        case ActionTypes.BRANDS_LOADING:
            return {...state, isLoading: true, errMess: null, brands: []}

        case ActionTypes.BRANDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};