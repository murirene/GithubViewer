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
    undefined: '',
    view: 'list',
    comments: [],
    issue: { user: {}, labels: []}
}

export default function(state=initialState, action) {
    switch(action.type){
    case 'REQ_ISSUES':
        return Object.assign({}, state, {
            loading: action.loading,
            view: action.view
        })
    case 'REC_ISSUES':
        return Object.assign({}, state, {
            loading: action.loading,
            issues: action.issues,
            page: parseInt(action.page),
            view: action.view
        })
    case 'REQ_ISSUE':
        return Object.assign({}, state, {
            loading: action.loading,
            view: action.view,
            comments: action.comments
        })
    case 'REC_ISSUE':
        return Object.assign({}, state, {
            loading: action.loading,
            view: action.view,
            issue: action.issue
        })
    case 'REQ_COMMENTS':
        return Object.assign({}, state, {
            comments: action.comments
        })
    case 'REC_COMMENTS':
        return Object.assign({}, state, {
            comments: action.comments
        })
    case 'SHOW_LIST':
        return Object.assign({}, state, {
            view: action.view
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
