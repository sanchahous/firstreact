import React, {Component} from 'react';
import classNames from 'classnames';

import css from './TrainingStatusFilter.styl';

export default class TrainingStatusFilter extends Component {
    render () {
        return (
           <div className={classNames(css.root)}>
               <button className="btn btn-all">All</button>
               <button className="btn btn-active">Active</button>
               <button className="btn btn-done">Done</button>
           </div>
        );
    }
}