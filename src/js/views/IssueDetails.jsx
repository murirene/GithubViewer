/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import Comment from '../components/Comment';
import consts from '../lib/constants';
import Labels from '../components/Labels';
let IssueDetails = React.createClass({
    render() {
        let fullDescription = [];
        if (this.props.issue.body) {
            fullDescription = this.props.transformHtml(this.props.issue.body);
        }

        return (
            <div className="detail-container">
                <h2>{this.props.issue.title}</h2>
                <div>
                    <div>
                        <div><img src={this.props.issue.user.avatar_url} height="42" width="42"/></div>
                        <div className="username">{this.props.issue.user.login}</div>
                    </div>
                    <Labels labels={this.props.issue.labels} />
                </div>
                <h5>{this.props.issue.state}</h5>
                <div className="jumbotron">
                    <div>
                        { fullDescription.map((element) => {
                            return element;
                        })}
                    </div>
                </div>
                <div>
                    {this.props.comments.map(comment => {
                        return <Comment key={`COMMENT_${comment.id}`} comment={comment}
                                        transformHtml={this.props.transformHtml}/>
                    })}
                </div>
                <div>
                    <button onClick={e => this.props.onClick()} type="button" className="btn btn-primary">Back</button>
                </div>
            </div>
        )
    }
})

export default IssueDetails;