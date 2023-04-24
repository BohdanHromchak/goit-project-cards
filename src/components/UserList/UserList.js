import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers } from 'services/api';
import { UserCard } from 'components/UserCard/UserCard';
import css from './UserList.module.css';

export const UserList = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <ul className={css.cardList}>
      {users.map(({ id, user, tweets, followers, avatar }) => (
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
  );
};
