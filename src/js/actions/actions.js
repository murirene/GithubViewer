import ACTION_TYPES from './actionTypes';
import fetch from 'isomorphic-fetch';

export function requestIssues(){
    return {
        type: 'REQ_ISSUES',
        loading: true,
        view: 'list'
    }
}

export function showList(){
    return {
        type: 'SHOW_LIST',
        view: 'list'
    }
}

export function requestIssue(){
    return {
        type: 'REQ_ISSUE',
        loading: true
    }
}

export function receivedIssue(issue){
    return {
        type: 'REC_ISSUE',
        loading: true,
        issue,
        view: 'detail'
    }
}


export function receivedIssues(issues, page=1){
    return {
        type: 'REC_ISSUES',
        loading: true,
        issues,
        page,
        view: 'list'
    }
}

export function saveLinks(links){
    return {
        type: 'SAVE_LINKS',
        links: links
    }
}

export function nextPage(page) {
    return dispatch => {
        return fetch(`https://api.github.com/repos/npm/npm/issues?page=${page}&client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851`,
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(issues => dispatch(receivedIssues(issues, page)))
    }
}

export function fetchIssue(number) {
    return dispatch => {
        dispatch(requestIssue());
        return fetch(`https://api.github.com/repos/npm/npm/issues/${number}?client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851`,
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(issue => dispatch(receivedIssue(issue)))
    }
}

export function fetchIssues(page=1) {
    return dispatch => {
        dispatch(requestIssues(page));
        return fetch(`https://api.github.com/repos/npm/npm/issues?page=${page}&client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851`,
            {headers: {Accept: 'application/json'}})
            .then(response => {
                dispatch(saveLinks(response.headers.get('Link') ))
              return response.json()
            })
            .then(issues => dispatch(receivedIssues(issues)))
    }
}