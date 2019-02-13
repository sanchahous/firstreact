import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TrainingList from './components/training-list';

const App = () => {

    const trainingData = [
        { label: 'жим лежа', important: false },
        { label: 'разведение гантелей', important: true },
        { label: 'подтягивание широким хватом', important: false },
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TrainingList trainings={trainingData} />
        </div>
    );
};

ReactDOM.render(<App/>,
    document.getElementById('root'));