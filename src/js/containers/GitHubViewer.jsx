/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import { fetchIssues } from '../actions/actions';
import GitHubViewer from '../views/GitHubViewer';

const mapStateToProps = (state) => ({
    issues: state.appReducer.issues,
    load: state.appReducer.load,
    pages: state.appReducer.pages,
    page: state.appReducer.page
});

const mapDispatchToProps = (dispatch) => ({
    fetchIssues() {
        dispatch(fetchIssues);
    }
});

const GitHubViewerContainer = connect(mapStateToProps, mapDispatchToProps)(GitHubViewer);
export default GitHubViewerContainer;
