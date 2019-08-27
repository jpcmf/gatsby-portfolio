import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Card = ({ title, subtitle, link, image, tags }) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">{image}</div>
        <div className="media-content">
          <p className="title has-text-light">{title}</p>
          <p className="subtitle has-text-light">{subtitle}</p>
          <div className="tags">
            {tags.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </span>
      </p>
    </footer>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string),
}

Card.defaultProps = {
  link: null,
  tags: [],
  image: null,
}

export default Card;
