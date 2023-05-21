import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import { Item, Logo, Img, Text } from './CardItem.styled';
import defaultImage from '../../image/hansel.png';
import logo from '../../image/logo.png';

const CardItem = ({ user, following, isFollowing }) => {
  const { id, user: name, avatar = defaultImage, tweets, followers } = user;
  const [active, setActive] = useState(following.includes(id));

  const followedClick = () => {
    isFollowing(id, followers, active);
    setActive(prevState => !prevState);
  };

  return (
    <Item>
      <Logo src={logo} />
      <Img src={avatar} alt={name} width="62" />
      <Text>{tweets.toLocaleString('en-US')} Tweets</Text>
      <Text>{followers.toLocaleString('en-US')} Followers</Text>
      <Button isCheked={active} response={() => followedClick(id)} />
    </Item>
  );
};

CardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
  following: PropTypes.array,
  isFollowing: PropTypes.func,
};

export default CardItem;
