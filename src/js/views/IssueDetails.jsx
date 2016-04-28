/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import consts from '../lib/constants';
import Comment from '../components/Comment';

let IssueDetails = React.createClass({
    render() {

        return (
            <div className="detail-container">
                <h2 className="title-header">{this.props.issue.title}</h2>
                <div className="section-x">
                    <div className="section1">
                        <div className="avatar"><img src={this.props.issue.user.avatar_url} height="42" width="42" /></div>
                        <div className="username">{this.props.issue.user.login}</div>
                    </div>
                    <div className="labels">{
                        this.props.issue.labels.map((label) => {
                            let divStyle = {
                                color: label.name == 'review'? 'white': 'dark grey',
                                font: 'bold',
                                backgroundColor: `#${label.color}`
                            };
                            return <span key={`LABEL_${label.name}`}><span style={divStyle}>{label.name} </span>&nbsp;</span>
                        })
                    }
                    </div>
                </div>
                <h5 className="state-header">{this.props.issue.state}</h5>
                <div className="jumbotron">
                <div className="full-description">
                    <p>{this.props.issue.body}</p>
                </div>
                </div>
                <div className="comment-section">
                {this.props.comments.map(comment => {
                    return <Comment key={`COMMENT_${comment.id}`}comment={comment} processDescription={this.props.processDescription}/>
                })}
                </div>
                <div className="action-section">
                    <button onClick={e => this.props.onClick()} type="button" className="btn btn-primary">Back</button>
                </div>
            </div>
        )}
})

export default IssueDetails;