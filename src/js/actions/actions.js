import ACTION_TYPES from './actionTypes';
import fetch from 'isomorphic-fetch';

export function requestIssues(){
    return {
        type: 'REQ_ISSUES',
        loading: true
    }
}

export function receivedIssues(issues){
    return {
        type: 'REC_ISSUES',
        loading: true,
        issues
    }
}

export function fetchIssues() {
    return dispatch => {
        dispatch(requestIssues());
        return fetch('https://api.github.com/repos/npm/npm/issues',
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(issues => dispatch(receivedIssues(issues)))
    }
}