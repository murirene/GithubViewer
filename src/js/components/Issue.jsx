/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';

let Issue = React.createClass({
    description: "",
    componentWillMount() {
        let description = '';
        let description2 = '';

        let words = this.props.issue.body.split(' ');

        for(let word of words) {
            debugger;
            description = `${description.length? description + ' ' + word: word}`
            if(description.length < 140) {
                description2 = description;
            }

            if(description2 >= 140) {
                break;
            }
        }

        this.description = description2;
    },
    componentWillReceiveProps() {
        let description = '';
        let description2 = '';

        let words = this.props.issue.body.split(' ');

        for(let word of words) {
            debugger;
            description = `${description.length? description + ' ' + word: word}`
            if(description.length < 140) {
                description2 = description;
            }

            if(description2 >= 140) {
                break;
            }
        }

        this.description = description2;
    },
    render() {
        return (
                <tr>
                    <td className="issue-nbr">{this.props.issue.number}</td>
                    <td className="title">{this.props.issue.title}</td>
                    <td className="username">{this.props.issue.user.login}</td>
                    <td className="avatar">avatar
                    </td>
                    <td className="description">{this.description}</td>
                </tr>
        )
    }
})

export default Issue