import React from 'react';
import PropTypes from 'prop-types';
import TrainingListItem from '../TrainingListItem';


const TrainingList = ({ trainings }) => {
    const elements = trainings.map((item, index) => {
        /* destructured id, spred operator ...propsExceptId */
        return (
            <TrainingListItem
                key={index}
                item={item}
            />
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};

TrainingList.propTypes = {
    trainings: PropTypes.array
};

export default TrainingList;
