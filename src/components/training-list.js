import React from 'react';

import TrainingListItem from './training-list-item';

const TrainingList = ({ trainings }) => {
    return (
        <ul>
            <li>
                <TrainingListItem
                    label={trainings[0].label}
                    important={trainings[0].important} />
            </li>
            <li>
                <TrainingListItem
                    label={trainings[1].label}
                    important={trainings[1].important} />
            </li>
            <li>
                <TrainingListItem
                    label={trainings[2].label}
                    important={trainings[2].important} />
            </li>
        </ul>
    );
};

export default TrainingList;