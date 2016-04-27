import React from 'react';
import constants from '../lib/constants';
import ReactTooltip from 'react-tooltip';

const TextInput = React.createClass({ // eslint-disable-line react/prefer-es6-class
    onEdit(e) {
        this.value = e.target.value;
        if (this.props.editStore) {
            this.props.editStore();
        }
    },
    value: '',
    render() {
        this.value = this.props.value;
        return (
            <div className={this.props.className}>
                <ReactTooltip />
                <label className={this.props.labelClassName} htmlFor={this.props.cssId}>{this.props.label}</label>
                <input
                    type={this.props.type} id={this.props.cssId} value={this.props.value}
                    placeholder={this.props.placeholder} required maxLength={this.props.maxLength}
                    disabled={!this.props.editable} required={this.props.isRequired}
                    onChange={this.onEdit} onBlur={this.onEdit}
                    data-tip="" onkeyDown={(e) => { e.target.setAttribute('data-tip', ''); }}
                    onMouseOver={(e) => { e.target.setAttribute('data-tip', constants.toolTipText[e.target.id]); }}
                />
            </div>
        );
    }
});

export default TextInput;