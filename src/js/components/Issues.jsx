/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';

let Issue = React.createClass({
    render() {
        return (
            <div>
                <tr>
                    <td className="issue-nbr">{this.props.issue}</td>
                    <td className="title">{this.props.title}</td>
                    <td className="username">{this.props.username}</td>
                    <td className="avatar">avatar
                    </td>
                    <td className="description">{this.props.description}</td>
                </tr>
            </div>
        )
    }
})

export default Issue