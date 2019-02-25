import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TrainingList from './components/training-list';

const App = () => {

    const trainingData = [
        { label: 'жим лежа', important: false, id: 1 },
        { label: 'разведение гантелей', important: true, id: 2 },
        { label: 'подтягивание широким хватом', important: false, id: 3 },
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