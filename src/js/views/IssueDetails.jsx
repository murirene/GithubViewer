/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import consts from '../lib/constants';
import TextInput from '../components/TextInput';
import Comment from '../components/Comment';

let IssueDetails = React.createClass({
    render() {

        return (
            <div className="detail-container">
                <TextInput className="cname" labelClassName="lcname" cssId="" label="Title" ref="title"
                           type="text" value={this.props.issue.title} placeholder="Title" readonly={true} />
                <TextInput className="cname" labelClassName="lcname" cssId="" label="State" ref="state"
                           type="text" value={this.props.issue.state} placeholder="State" readonly={true} />
                <TextInput className="cname" labelClassName="lcname" cssId="" label="Reporter's Username"  ref="username"
                           type="text" value={this.props.issue.user.login} placeholder="Reporter's Username" readonly={true} />
                <img src={this.props.issue.user.avatar_url} height="42" width="42" />
                <div className="labels">{
                    this.props.issue.labels.map((label) => {
                        let divStyle = {
                            color: 'white',
                            font: 'bold',
                            backgroundColor: `#${label.color}`
                        };
                        return <span style={divStyle}>{label.name}</span>
                    })
                }</div>
                <textarea className="form-control" rows="3" readOnly={true} value={this.props.issue.body}></textarea>
                {this.props.comments.map(comment => {
                    return <Comment key={`COMMENT_${comment.id}`}comment={comment} processDescription={this.props.processDescription}/>
                })}
                <button onClick={e => this.props.onClick()} type="button" className="btn btn-primary">Back</button>
            </div>
        )}
})

export default IssueDetails;