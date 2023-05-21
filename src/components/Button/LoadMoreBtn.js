import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ response }) => (
  <Button type="button" onClick={response}>
    Load more
  </Button>
);

LoadMoreBtn.propTypes = {
  response: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
