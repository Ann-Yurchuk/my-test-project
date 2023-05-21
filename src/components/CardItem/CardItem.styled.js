import styled from '@emotion/styled';

import picture from '../../image/picture.png';
import stroke from '../../image/stroke.png';
import regect from '../../image/regect.png';

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  background-image: url('${picture}'), url('${stroke}'), url('${regect}'),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px 168px, 80px 80px, 308px 8px cover;
  background-position: top 29px left 26px, bottom 185px left 145px,
    bottom 225px left 0, center;
  background-repeat: no-repeat;

  animation: rotateslide 2s;

  @keyframes rotateslide {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      transform: translate3d(0, -30px, 0);
    }

    70% {
      transform: translate3d(0, -10px, 0);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--text-color);
`;

export const Img = styled.img`
  position: absolute;
  top: 195px;
  border-radius: 50%;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
