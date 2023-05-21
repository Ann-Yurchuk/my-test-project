import styled from '@emotion/styled';

export const Btn = styled.button`
  position: relative;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin-top: 10px;
  margin-bottom: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${({ isCheked }) => (isCheked ? '#5CD3A8' : ' #EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
