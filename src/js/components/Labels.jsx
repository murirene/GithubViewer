import React from 'react';

let Labels = React.createClass({
    render() {
        return (
            <div className="labels">{
                this.props.labels.map((label) => {
                    let divStyle = {
                        color: label.name == 'review' || label.name == 'support' || label.name == 'windows' || label.name == 'documentation' ? 'white': 'dark grey',
                        font: 'bold',
                        backgroundColor: `#${label.color}`,
                    };
                    return <span key={`LABEL_${label.name}`}><span style={divStyle}>{label.name} </span>&nbsp;</span>
                })
            }
            </div>
        )
    }
})

export default Labels;

