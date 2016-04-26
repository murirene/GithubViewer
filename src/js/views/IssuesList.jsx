/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import { PageHeader } from 'react-bootstrap';
import consts from '../lib/constants';
import Issue from '../components/Issue';
import Pagination from '../components/Pagination';
let IssuesList = React.createClass({
    render() {
        let issues;
        let pagination;

        if(!this.props.issues.length){
            issues = <h1>No issues to show</h1>
        } else {
            issues =
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="issue-nbr">Issue #</th>
                        <th className="title">Title</th>
                        <th className="username">Username</th>
                        <th className="avatar">Avatar</th>
                        <th className="description">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.issues.map( (issue, index) => {
                                return <Issue issue={issue} key={`ISSUE_${index}` }/>
                            }
                        )
                    }
                    </tbody>
                    </table>
            pagination = <Pagination onClick={this.props.nextPage} pages={this.props.pages}
                                     page={this.props.page} next={this.props.next} last={this.props.last} />
        }

        return (
            <div className='index'>
                <div className="header">
                    <PageHeader >Github Viewer</PageHeader>
                </div>
                <div className='main-container'>
                    <div className="issue-list">
                        {issues}
                        {pagination}
                    </div>
                </div>
            </div>
        )
    }
})

export default IssuesList;
