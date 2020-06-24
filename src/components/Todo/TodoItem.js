
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import checkImg from '../../img/check.svg';
import checkCompleteImg from '../../img/check-complete.svg';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img
                    alt="Check"
                    onClick={onClick}
                    src={url}
                    width={32}
                    height={32}
                />
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    item : PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick : PropTypes.func.isRequired
}

export default TodoItem;