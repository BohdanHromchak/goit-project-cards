import React from 'react';
import { useState } from 'react';
import css from './UserCard.module.css';
import { updateUserFollowers } from 'services/api';
import { ReactComponent as GoitLogo } from '../../images/goitLogo.svg';
import cardImage from '../../images/cardImage.png';

export const UserCard = ({ id, tweets, followers, avatar, user }) => {
  const parsedIsFollow = JSON.parse(localStorage.getItem(id));

  const [isfollow, setIsFollow] = useState(
    parsedIsFollow !== null ? parsedIsFollow : false
  );
  
  const [uiFollowers, setUiFollowers] = useState(followers);

  const handleFollow = () => {
    setIsFollow(!isfollow);
    localStorage.setItem(id, JSON.stringify(!isfollow));

    if (!isfollow) {
      updateUserFollowers(id, followers + 1);
      setUiFollowers(uiFollowers + 1);
      return;
    }
    updateUserFollowers(id, uiFollowers - 1);
    setUiFollowers(uiFollowers - 1);
    return;
  };

  return (
    <li className={css.cardItem}>
      <GoitLogo />
      <img src={cardImage} alt="cardImage" className={css.cardImage} />

      <img src={avatar} alt={user} className={css.userImg} />
      <p className={css.userInfo}>{uiFollowers}</p>
      {!isfollow ? (
        <button onClick={handleFollow}>FOLLOW</button>
      ) : (
        <button onClick={handleFollow}>FOLLOWING</button>
      )}
    </li>
  );
};
