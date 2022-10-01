import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardBody,
  CardButton,
} from './styles';

const Card = ({ type, image, title, body, link }) => {
  return (
    <CardWrapper className={`card-${type}`}>
      <CardImage image={image} />
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <CardButton to={link}>View</CardButton>
    </CardWrapper>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  link: '/',
  type: 'default',
  image: 'default-image.png',
  title: 'Title',
  body: 'I am the card\'s description',
};

export default Card;
