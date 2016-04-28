import React from 'react';
import consts from '../lib/constants';

let Comment = React.createClass({
    render() {
        let fullComment;
        if(this.props.comment.body) {
            fullComment = this.props.transformHtml(this.props.comment.body);
        }
        return (
            <div className="comment">
                <div>
                    <div><img src={this.props.comment.user.avatar_url} height="42" width="42" /></div>
                    <div className="username">{this.props.comment.user.login}</div>
                </div>
                <div>
                    { fullComment.map( (element) => {
                        return element;
                    })}
                </div>
            </div>
        )
    }
})

export default Comment;