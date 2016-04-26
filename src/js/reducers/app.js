/* Reducer component of the Redux Unidirectional flow
 * The Reducer is a pure function that will produce a new state as per the incoming Action. */

import ACTION_TYPES from '../actions/actionTypes';
import consts from '../lib/constants';

const initialState = {
    issues: [],
    loading: false,
    status: '',
    pages: 1,
    page: 1,
    viewIndex: undefined,
    next: '',
    undefined: ''
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
            issues: action.issues,
            page: parseInt(action.page)
        })
    case 'SAVE_LINKS':
        let next = action.links.split(';')[0];
        let last = action.links.split(';')[1].split(',')[1];
        let page = parseInt(next.split('=')[1].replace('>', '')) - 1;
        let pages = parseInt(last.split('=')[1].replace('>', ''));

        return Object.assign({}, state, { next, last, page, pages });
    default:
        return state;
    }
}
