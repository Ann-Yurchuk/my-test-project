import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, LinkNav } from './LoadMoreBtn.styled';

const BackButton = () => {
  const location = useLocation();
  const openLinkHref = location.state?.from ?? '/';

  return (
    <Button type="button">
      <LinkNav to={openLinkHref} replace={true}>
        Come back
      </LinkNav>
    </Button>
  );
};

export default BackButton;
