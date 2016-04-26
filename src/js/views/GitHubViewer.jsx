/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import IssuesList from './IssuesList';
import consts from '../lib/constants';

let WhackAMole = React.createClass({
    componentWillMount() {
        debugger;
        this.props.fetchIssues();
    },
    render() {
        return (
            <div className="controlPanel">
                <IssuesList {...this.props}/>
            </div>
        )}
})

export default WhackAMole;
