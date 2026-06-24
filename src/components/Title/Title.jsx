import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div className="section-heading">
    <span className="section-heading__eyebrow">PORTFOLIO</span>
    <h2 className="section-title">{title}</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
