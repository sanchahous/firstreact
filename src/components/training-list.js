import React from 'react';

import TrainingListItem from './training-list-item';

const TrainingList = ({ trainings }) => {

    const elements = trainings.map((item) => {
        const { id, ...propsExceptId } = item; //destructured id, Rest parameter ...propsExceptId

        return (
            <li key={id}>  /* key is necessary for optimized comparizon on update */
                <TrainingListItem {...propsExceptId } />
            </li>
        )
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TrainingList;