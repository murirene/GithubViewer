/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import IssuesList from './IssuesList';
import IssueDetails from './IssueDetails';
import Spinner from '../components/Spinner';
import consts from '../lib/constants';
import { PageHeader } from 'react-bootstrap';
import _ from 'lodash';

let GitHubViewer = React.createClass({
    componentWillMount() {
        this.props.fetchIssues();
    },
    processDescription: (description) => {
        let users = description.match(/@\w+/g);
        let runner = '';
        let list = [];
        if(!users){
            list.push(<span key={`element${list.length}`}>{description}</span>)
            return list;
        }

        let userSet = new Set();

        for(let user of users){
            userSet.add(user);
        }

        for(let word of description.split(' ')) {
            if(userSet.has(word)){
                if(runner.length){
                  list.push(<span key={`element${list.length}`}>{runner}&nbsp;</span>);
                }
                list.push(<a key={`element${list.length}`} href="http://www.w3schools.com/html/">{word}</a>)
                runner = '';
            } else {
                runner = runner + ' ' + word;
            }
        }

        if(runner.length){
            list.push(<span key={`element${list.length}`}>{runner}&nbsp;</span>);
        }

        return list
    },
    render() {
        let spinner;
        let view;

        if (this.props.loading) {
            spinner = <Spinner />
        }

        if (this.props.view === 'list') {
            view = <IssuesList {...this.props} processDescription={this.processDescription} />
        } else {
            view = <IssueDetails {...this.props} onClick={this.props.showList} processDescription={this.processDescription} />
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
