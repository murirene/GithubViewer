import React from 'react';
//import constants from '../lib/constants';

const TextInput = React.createClass({
    render() {
        return (
            <div className={this.props.className}>
                <label className={this.props.labelClassName} htmlFor={this.props.cssId}>{this.props.label}</label>
                <input
                    type={this.props.type} id={this.props.cssId} value={this.props.value}
                    placeholder={this.props.placeholder} readOnly={this.props.readonly}
                />
            </div>
        );
    }
});

export default TextInput;