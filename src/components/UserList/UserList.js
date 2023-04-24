import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers } from 'services/api';
import { UserCard } from 'components/UserCard/UserCard';
import css from './UserList.module.css';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(4);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchUsers();
  }, []);

  const handleLoadMore = () => {
    setVisibleUsers(prev => prev + 2);
  };

  return (
    <React.Fragment>
      <ul className={css.cardList}>
        {users
          .slice(0, visibleUsers)
          .map(({ id, user, tweets, followers, avatar }) => (
            <UserCard
              key={id}
              id={id}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
            />
          ))}
      </ul>

      {visibleUsers < users.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </React.Fragment>
  );
};
