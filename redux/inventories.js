import * as ActionTypes from './ActionTypes';

export const inventories = (state = { isLoading: true,
                                     errMess: null,
                                     inventories: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INVENTORIES:
            return {...state, isLoading: false, errMess: null, inventories: action.payload};

        case ActionTypes.INVENTORIES_LOADING:
            return {...state, isLoading: true, errMess: null, inventories: []}

        case ActionTypes.INVENTORIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};