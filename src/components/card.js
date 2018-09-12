import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ author, excerpt, id, title }) => (
  <div>
    <h3>{`author: ${author}`}</h3>
    <h3>{`excerpt: ${excerpt}`}</h3>
    <h3>{`ID: ${id}`}</h3>
    <h3>{`title: ${title}`}</h3>
  </div>
);
Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
export default Card;
