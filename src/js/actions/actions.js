import ACTION_TYPES from './actionTypes';

export function fetchIssues(page=1) {
    return function (dispatch) {
        dispatch(requestIssues());
        return fetch('api.github.com/repos/npm/npm/issues',
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(enterprises => dispatch(receivedIssues(issues)))
    }
}

export function requestIssues(){
    return {
        type: ACTION_TYPES.REQ_ISSUES,
        loading: true
    }
}

export function receivedIssues(issues){
    return {
        type: ACTION_TYPES.REC_ISSUES,
        loading: true,
        issues
    }
}