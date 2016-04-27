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
                <tr data-number={this.props.issue.number}
                    onClick={ e => this.props.onClick(e.currentTarget.getAttribute('data-number'))}>
                    <td className="issue-nbr">{this.props.issue.number}</td>
                    <td className="title">{this.props.issue.title}</td>
                    <td className="labels">{
                        this.props.issue.labels.map((label) => {
                            debugger;
                            let divStyle = {
                                color: 'white',
                                font: 'bold',
                                backgroundColor: `#${label.color}`
                            };
                        return <span style={divStyle}>{label.name}</span>
                    })
                    }</td>
                    <td className="username">{this.props.issue.user.login}</td>
                    <td className="avatar"><img src={this.props.issue.user.avatar_url} height="42" width="42" />
                    </td>
                    <td className="description">{this.description}</td>
                </tr>
        )
    }
})

export default Issue