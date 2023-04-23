import React from 'react';
import css from './UserCard.module.css'

export const UserCard = ({ tweets, followers, avatar, user }) => {
    console.log(avatar)
  return <li className={css.cardItem}><img src={avatar} alt={user} className={css.userImg}/></li>;
};
