import React from 'react';

import './Card.css'

const Card = ({className}) => {
    const classes = ' card ' + className;

    return <div className={classes}>{props.children}</div>;
};

Card.propTypes = {
    className:  PropTypes.string,
}

export default Card;
