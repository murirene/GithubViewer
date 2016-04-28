import React from 'react';
import Labels from './Labels';
import consts from '../lib/constants';

let Issue = React.createClass({
    description: [],
    componentWillMount() {
        this.description = this.props.truncateDescription(this.props.issue.body);
    },
    componentWillReceiveProps() {
        this.description = this.props.truncateDescription(this.props.issue.body);
    },
    render() {
        return (
            <div className='flex-row issue-row' data-number={this.props.issue.number}
                 onClick={ e => this.props.onClick(e.currentTarget.getAttribute('data-number'))}>
                <div>
                    <div><img src={this.props.issue.user.avatar_url} height="42" width="42" /></div>
                    <div className="username">{this.props.issue.user.login}</div>
                </div>
                <div>
                    <div className="title">{this.props.issue.title}</div>
                    <div className="flex-row">
                        <div className="issue-number">{`#${this.props.issue.number}`}</div>
                        <Labels labels={this.props.issue.labels} />
                    </div>
                </div>
                <div className="description">
                    { this.description.map( (element) => {
                        return element;
                    })}
                </div>
            </div>
            )
    }
})

export default Issue