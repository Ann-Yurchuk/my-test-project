import { statusFilters } from './constants';

const { all, follow, followings } = statusFilters;

const filterUsers = (users, followers, filter) => {
  switch (filter) {
    case all.value:
      return users;
    case follow.value:
      return users.filter(({ id }) => !followers.includes(id));
    case followings.value:
      return users.filter(({ id }) => followers.includes(id));
    default:
      return users;
  }
};

export default filterUsers;
