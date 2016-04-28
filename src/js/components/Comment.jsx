/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';
import TextInput from '../components/TextInput';
let Comment = React.createClass({
    render() {
        let p;
        if(this.props.comment.body) {
            p = this.props.processDescription(this.props.comment.body);
        }
        debugger;

        return (
            <div class="comment">
                <img src={this.props.comment.user.avatar_url} height="42" width="42" />
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