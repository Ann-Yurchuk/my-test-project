import React from "react";
import PropTypes from "prop-types";
import { CardItem } from "../CardItem";
import { Card } from "./CardList.styled";

const CardList = ({ users, following, isFollowing }) => {
  return (
    <>
      <Card>
        {users.map((user) => (
          <CardItem
            key={user.id}
            user={user}
            following={following}
            isFollowing={isFollowing}
          />
        ))}
      </Card>
    </>
  );
};

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  following: PropTypes.array.isRequired,
  isFollowing: PropTypes.func.isRequired,
};

export default CardList;
