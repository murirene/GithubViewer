/* Reducer component of the Redux Unidirectional flow
 * The Reducer is a pure function that will produce a new state as per the incoming Action. */

import ACTION_TYPES from '../actions/actionTypes';
import consts from '../lib/constants';

const initialState = {
    issues: [],
    loading: false,
    status: '',
    pages: 0,
    page: undefined,
    viewIndex: undefined
}

export default function(state=initialState, action) {
    switch(action.type){
    case 'REQ_ISSUES':
        return Object.assign({}, state, {
            loading: action.loading
        })
    case 'REC_ISSUES':
        return Object.assign({}, state, {
            loading: action.loading,
            issues: action.issues
        })
    default:
        return state;
    }
}
