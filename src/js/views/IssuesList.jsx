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
            issues =
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="issue-nbr">Issue #</th>
                        <th className="title">Title</th>
                        <th className="username">Username</th>
                        <th className="labels">Labels</th>
                        <th className="avatar">Avatar</th>
                        <th className="description">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.issues.map((issue, index) => {
                                return <Issue processDescription={this.props.processDescription}
                                              issue={issue} key={`ISSUE_${index}` } onClick={this.props.fetchIssue}/>
                            }
                        )
                    }
                    </tbody>
                </table>
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
