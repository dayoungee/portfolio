import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../images/profile.jpg';

const AboutImg = ({ alt }) => (
  <img className="about-profile-image" src={profileImage} alt={alt} />
);

AboutImg.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default AboutImg;
