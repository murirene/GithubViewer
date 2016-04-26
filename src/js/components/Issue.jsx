/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';

let Issue = React.createClass({
    render() {
        debugger;
        return (
                <tr>
                    <td className="issue-nbr">{this.props.issue.number}</td>
                    <td className="title">{this.props.issue.title}</td>
                    <td className="username">{this.props.issue.user.login}</td>
                    <td className="avatar">avatar
                    </td>
                    <td className="description">{this.props.issue.body}</td>
                </tr>
        )
    }
})

export default Issue