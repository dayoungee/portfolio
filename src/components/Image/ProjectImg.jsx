import React from 'react';
import PropTypes from 'prop-types';
import image01 from '../../images/01.png';
import image02 from '../../images/02.png';
import image03 from '../../images/03.png';
import image04 from '../../images/04.png';
import image05 from '../../images/05.png';

const projectImages = {
  '01.png': image01,
  '02.png': image02,
  '03.png': image03,
  '04.png': image04,
  '05.png': image05,
};

const ProjectImg = ({ filename, alt }) => (
  <img className="project-static-image" src={projectImages[filename]} alt={alt} />
);

ProjectImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProjectImg;
