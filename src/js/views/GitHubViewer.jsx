/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import IssuesList from './IssuesList';
import Spinner from '../components/Spinner';
import consts from '../lib/constants';

let GitHubViewer = React.createClass({
    componentWillMount() {
        this.props.fetchIssues();
    },
    render() {
        let spinner;
        if(this.props.loading){
            spinner = <Spinner />
        }

        return (
            <div className="controlPanel">
                {spinner}
                <IssuesList {...this.props}/>
            </div>
        )}
})

export default GitHubViewer;
