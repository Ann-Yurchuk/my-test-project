import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin: 50px auto;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: var(--text-color);
  border-radius: 70px;
  background-color: var(--secondary-accent-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: var(--btn-accent-color);
  }
`;

export const LinkNav = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  color: var(--text-color);
`;
