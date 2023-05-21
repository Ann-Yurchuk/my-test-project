import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  max-width: 1600px;
  padding: 10px;
  margin: 0 auto;
  background-color: var(--background-color);
  box-shadow: 0 3px 3px #5b525f;
  border-radius: 3px;
`;

export const Nav = styled.nav`
  border-bottom: 4px solid;
  border-image: linear-gradient(to right, #835ab4, #7d0c5f, #5d45fc, #270448)
    67% 0%;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--secondary-accent-color);
  border-radius: 10px;

  &.active {
    color: var(--accent-color);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Item = styled.li`
  padding: 10px;
  font-weight: 800;
  font-size: 21px;
`;
