 import React from 'react';
// DOC (read about destructurization for understanding to print props like { label } )
const TrainingListItem = ({label, important = false}) => {
    const style = {
        color: important ? "tomato" : "black"
    };
    return <span style={style}>{ label }</span>;
};

export default TrainingListItem;