/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';
let Comment = React.createClass({
    render() {
        let p;
        if(this.props.comment.body) {
            p = this.props.processDescription(this.props.comment.body);
        }
        return (
            <div className="comment">
                <div className=" section1">
                    <div className="avatar"><img src={this.props.comment.user.avatar_url} height="42" width="42" /></div>
                    <div className="username">{this.props.comment.user.login}</div>
                </div>
                <div>
                    { p.map( (element) => {
                        return element;
                    })}
                </div>
            </div>
        )
    }
})

export default Comment;