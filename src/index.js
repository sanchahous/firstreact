import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

    const exercises = ['жим лежа', 'разведение гантелей стоя', 'подтягивания'];
    return (
        <ul>
          <li>{ exercises[0] }</li>
          <li>{ exercises[1] }</li>
          <li>{ exercises[2] }</li>
        </ul>
    );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search"/>;
};

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

ReactDOM.render(<App/>,
  document.getElementById('root'));