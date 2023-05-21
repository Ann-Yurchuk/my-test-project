import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyle } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
