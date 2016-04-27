/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import { fetchIssues, nextPage, fetchIssue, showList } from '../actions/actions';
import GitHubViewer from '../views/GitHubViewer';

const mapStateToProps = (state) => ({
    issues: state.appReducer.issues,
    issue: state.appReducer.issue,
    load: state.appReducer.load,
    pages: state.appReducer.pages,
    page: state.appReducer.page,
    last: state.appReducer.last,
    next: state.appReducer.next,
    view: state.appReducer.view
});

const mapDispatchToProps = (dispatch) => ({
    fetchIssues: () => {
        dispatch(fetchIssues());
    },
    fetchIssue: (number) => {
        dispatch(fetchIssue(number));
    },
    nextPage: (page) => {
        dispatch(nextPage(page));
    },
    showList: () => {
        dispatch(showList());
    }
});

const GitHubViewerContainer = connect(mapStateToProps, mapDispatchToProps)(GitHubViewer);
export default GitHubViewerContainer;
