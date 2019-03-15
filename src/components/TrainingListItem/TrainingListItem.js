import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TrainingListItem.styl';

// DOC (read about destructurization for understanding to print props like { label } )

const TrainingListItem = (props) => {
    const {
        item,
        icon
    } = props;

    return (
        <li
            className={classNames(css.root, {
                [css.root_type_important]: item.important
            })}
            key={item.id}
        >
            <span>
                {item.label}
                {
                    icon &&
                    <div>
                        icon
                    </div>
                }
            </span>
        </li>
    );
};

TrainingListItem.defaultProps = {
    icon: false
};

TrainingListItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string,
        important: PropTypes.bool,
        id: PropTypes.number
    }).isRequired,
    icon: PropTypes.bool,
    itemImportant: PropTypes.string
};

export default TrainingListItem;
