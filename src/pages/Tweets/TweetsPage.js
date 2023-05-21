import { useEffect, useState } from 'react';
import { getUsers, updateUser } from '../../api/usersApi';
import { statusFilters } from '../../utils/constants';
import useLocalStorage from '../../hooks/userLocalStorage';
import filterUsers from '../../utils/filterUser';
import Container from '../../components/Container/Container';
import CardList from '../../components/Card/CardList';
import FilterTweets from '../../components/FilterTweets/FilterTweets';
import MyLoader from '../../components/Loader/Loader';
import LoadMoreBtn from '../../components/Button/LoadMoreBtn';
import BackButton from '../../components/Button/BackButton';
import { Box, Wrapper } from './TweetsPage.styled';

export const Tweets = () => {
  const totalLimit = 15;
  const [users, setUsers] = useLocalStorage('users', []);
  const [following, setFollowing] = useLocalStorage('following', []);
  const [selectedOption, setSelectedOption] = useState(statusFilters.all);
  const [page, setPage] = useState(1);
  const [totalUsers] = useState(totalLimit);
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);

  const filteredUsers = filterUsers(users, following, selectedOption.value);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const newUsers = await getUsers(page);

      if (page === 1) {
        setUsers(newUsers);
        setIsLoading(false);
        return;
      }

      if (newUsers.length === 0) {
        setActive(true);
        setIsLoading(false);
      }
      setUsers(prevState => [...prevState, ...newUsers]);
      setIsLoading(false);
    }
    fetchUsers();

    // eslint-disable-next-line
  }, [active, page]);

  const updateFollowers = async (id, followers, active) => {
    setUsers(newUsers =>
      newUsers.map(user => {
        if (user.id !== id) {
          return user;
        }

        return {
          ...user,
          followers: !active ? user.followers + 1 : user.followers - 1,
        };
      })
    );

    if (!active) {
      setFollowing(prevState => [...prevState, id]);
      await updateUser(id, followers - 1);
    }
  };

  const ifLoadMore = () => {
    return totalUsers - users.length > 3;
  };

  return (
    <>
      <Container>
        <Box>
          {isLoading ? (
            <MyLoader />
          ) : (
            <>
              <Wrapper>
                Filter tweets:
                <FilterTweets
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </Wrapper>
              <BackButton />
              {users.length !== 0 && (
                <>
                  <CardList
                    users={filteredUsers}
                    following={following}
                    isFollowing={updateFollowers}
                  />
                  {ifLoadMore() && (
                    <LoadMoreBtn response={() => setPage(page => page + 1)} />
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Container>
    </>
  );
};
