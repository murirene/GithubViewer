import { ACTION_TYPES } from './actionTypes';
import fetch from 'isomorphic-fetch';
import constants from '../lib/constants';

export function requestIssues(){
    debugger;
    return {
        type: ACTION_TYPES.REQ_ISSUES,
        loading: true,
        view: constants.VIEWS.LIST
    }
}

export function requestIssue(){
        return {
            type: ACTION_TYPES.REQ_ISSUE,
            loading: true,
            comments: []
        }
}

export function requestComments(){
    return {
        type: ACTION_TYPES.REQ_COMMENTS,
        comments: []
    }
}

export function receivedComments(comments){
    return {
        type: ACTION_TYPES.REC_COMMENTS,
        comments
    }
}

export function receivedIssue(issue){
    return {
        type: ACTION_TYPES.REC_ISSUE,
        loading: true,
        issue,
        view: constants.VIEWS.DETAIL
    }
}

export function receivedIssues(issues, page=1){
    return {
        type: ACTION_TYPES.REC_ISSUES,
        loading: true,
        issues,
        page,
        view: constants.VIEWS.LIST
    }
}

export function showList(){
    return {
        type: ACTION_TYPES.SHOW_LIST,
        view: constants.VIEWS.LIST
    }
}

export function saveLinks(links){
    return {
        type: ACTION_TYPES.SAVE_LINKS,
        links: links
    }
}

export function nextPage(page) {
    return dispatch => {
        return fetch(`https://api.github.com/repos/npm/npm/issues?page=${page}`,
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(issues => dispatch(receivedIssues(issues, page)))
    }
}

export function fetchIssue(number) {
    return dispatch => {
        dispatch(requestIssue());
        return fetch(`https://api.github.com/repos/npm/npm/issues/${number}`,
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(issue => {
                if(issue.comments > 0) {
                    dispatch(fetchComment(issue.comments_url))
                }
                dispatch(receivedIssue(issue))
            })
    }
}

export function fetchComment(url) {
    return dispatch => {
        dispatch(requestComments());
        return fetch(`${url}`,
            {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(comments => dispatch(receivedComments(comments))
            )
    }
}

export function fetchIssues(page=1) {
    return dispatch => {
        dispatch(requestIssues(page));
        return fetch(`https://api.github.com/repos/npm/npm/issues?page=${page}`,
            {headers: {Accept: 'application/json'}})
            .then(response => {
                dispatch(saveLinks(response.headers.get('Link') ))
              return response.json()
            })
            .then(issues => dispatch(receivedIssues(issues)))
    }
}