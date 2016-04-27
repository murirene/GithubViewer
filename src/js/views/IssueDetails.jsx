/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import consts from '../lib/constants';
import TextInput from '../components/TextInput'
let IssueDetails = React.createClass({

    render() {
        return (
            <div className="detail-container">
                <TextInput className="cname" labelClassName="lcname" cssId="" label="Title"
                           type="text" value={this.props.issue.title} placeholder="Title" readonly={true} />
                <TextInput className="cname" labelClassName="lcname" cssId="" label="State"
                           type="text" value={this.props.issue.state} placeholder="State" readonly={true} />
                <TextInput className="cname" labelClassName="lcname" cssId="" label="Labels"
                           type="text" value="" placeholder="Labels" readonly={true} />
                <TextInput className="cname" labelClassName="lcname" cssId="" label="Reporter's Username"
                           type="text" value={this.props.issue.user.login} placeholder="Reporter's Username" readonly={true} />
                <img src={this.props.issue.user.avatar_url} height="42" width="42" />
                <textarea className="form-control" rows="3" readOnly={true} value={this.props.issue.body}></textarea>
                <button onClick={e => this.props.onClick()} type="button" className="btn btn-primary">Back</button>
            </div>
        )}
})

export default IssueDetails;