/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import Issue from '../components/Issue';
import Pagination from '../components/Pagination';
import consts from '../lib/constants';

let IssuesList = React.createClass({
    truncateDescription(issue) {
        let accumulator = '';
        let description = '';

        let words = issue.split(' ');

        for (let word of words) {
            accumulator = `${accumulator.length ? accumulator + ' ' + word : word}`
            if (accumulator.length < 140) {
                description = accumulator;
            } else {
                break;
            }
        }

        if (description) {
            return this.props.transformHtml(description);
        }

        return [];
    },
    render() {
        let issues;
        let pagination;

        if (!this.props.issues.length) {
            issues = <h1>No issues to show</h1>
        } else {
            issues = <div className="list-container">
                {
                    this.props.issues.map((issue, index) => {
                            return <Issue key={`ISSUE_${index}`} transformHtml={this.props.transformHtml}
                                          truncateDescription={this.truncateDescription}
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
