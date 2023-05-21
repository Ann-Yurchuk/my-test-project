import React from 'react';
import { HeaderStyle, Nav, Link, List, Item } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <Nav>
        <List>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/tweets">Tweets</Link>
          </Item>
        </List>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
