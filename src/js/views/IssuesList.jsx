/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import consts from '../lib/constants';
import Issue from '../components/Issue';
import Pagination from '../components/Pagination';
let IssuesList = React.createClass({
    render() {
        let issues;
        let pagination;

        if (!this.props.issues.length) {
            issues = <h1>No issues to show</h1>
        } else {
            issues = <div className="list-container">
                    {
                        this.props.issues.map((issue, index) => {
                                return <Issue key={`ISSUE_${index}`} processDescription={this.props.processDescription}
                                              issue={issue} onClick={this.props.fetchIssue}/>
                            }
                        )
                    }
                    </div>
            pagination = <Pagination onClick={this.props.nextPage} pages={this.props.pages}
                                     page={this.props.page} next={this.props.next} last={this.props.last}/>
        }

        return (
            <div className="issue-list">
                {issues}
                {pagination}
            </div>
        )
    }
})

export default IssuesList;
