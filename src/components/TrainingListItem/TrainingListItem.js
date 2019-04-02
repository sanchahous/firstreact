import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TrainingListItem.styl';

export default class TrainingListItem extends Component {

    static defaultProps = {
        icon: false
    };

    static propTypes = {
        item: PropTypes.shape({
            label: PropTypes.string,
            important: PropTypes.bool,
            id: PropTypes.number
        }).isRequired,
        icon: PropTypes.bool,
        itemImportant: PropTypes.string
    };

    render () {
        const {
            item,
            icon
        } = this.props;

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
        )
    }

}