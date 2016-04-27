/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import IssuesList from './IssuesList';
import IssueDetails from './IssueDetails';
import Spinner from '../components/Spinner';
import consts from '../lib/constants';
import { PageHeader } from 'react-bootstrap';

let GitHubViewer = React.createClass({
    componentWillMount() {
        this.props.fetchIssues();
    },
    render() {
        let spinner;
        let view;

        if (this.props.loading) {
            spinner = <Spinner />
        }
        debugger;
        if (this.props.view === 'list') {
            view = <IssuesList {...this.props}/>
        } else {
            view = <IssueDetails {...this.props} onClick={this.props.showList}/>
        }

        return (
            <div className='index'>
                <div className="header">
                    <PageHeader >Github Viewer</PageHeader>
                </div>
                <div className='main-container'>
                    <div className="controlPanel">
                        {spinner}
                        {view}
                    </div>
                </div>
            </div>
        )
    }
})

export default GitHubViewer;
