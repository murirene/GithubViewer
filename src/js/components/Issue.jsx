/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';

let Issue = React.createClass({
    description: [],
    truncateDescription() {
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

        if(description2) {
            this.description = this.props.processDescription(description2);
        }
    },
    componentWillMount() {
        this.truncateDescription();
    },
    componentWillReceiveProps() {
        this.truncateDescription();
    },
    render() {
        return (
            <div className='flex-row issue-row' data-number={this.props.issue.number}
                 onClick={ e => this.props.onClick(e.currentTarget.getAttribute('data-number'))}>
                <div className=" section1">
                    <div className="avatar"><img src={this.props.issue.user.avatar_url} height="42" width="42" /></div>
                    <div className="username">{this.props.issue.user.login}</div>
                </div>
                <div className=" section2">
                    <div className="title">{this.props.issue.title}</div>
                    <div className="flex-row">
                        <div className="issue-number">{`#${this.props.issue.number}`}</div>
                        <div className="labels">{
                            this.props.issue.labels.map((label) => {
                                let divStyle = {
                                    color: label.name == 'review'? 'white': 'dark grey',
                                    font: 'bold',
                                    backgroundColor: `#${label.color}`
                                };
                                return <span key={`LABEL_${label.name}`}><span style={divStyle}>{label.name} </span>&nbsp;</span>
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className="description section3">
                    { this.description.map( (element) => {
                        return element;
                    })}
                </div>
            </div>
            )
    }
})

export default Issue