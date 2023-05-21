import styled from 'styled-components';
import background from '../../image/fon.jpg';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  background-color: var(--accent-color);
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 110px;
  right: 60px;
  width: 200px;
  margin-top: 20px;
  font-size: 17px;
  color: var(--background-color);
`;
