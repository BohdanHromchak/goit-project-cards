import React from 'react';
import { Link } from 'react-router-dom';
import { UserList } from 'components/UserList/UserList';
import { IoMdArrowRoundBack } from 'react-icons/io';
import css from './Tweets.module.css';

export const Tweets = () => {
  return (
    <React.Fragment>
      <Link to="/" className={css.link}>
        <IoMdArrowRoundBack size={24} />
        Back
      </Link>
      <UserList />
    </React.Fragment>
  );
};
