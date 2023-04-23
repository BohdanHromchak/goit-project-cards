import React from 'react';
import css from './UserCard.module.css'
import { ReactComponent as GoitLogo } from "../../images/goitLogo.svg";
// import { ReactComponent as CardImage } from "../../images/cardImage.png";
import cardImage from '../../images/cardImage.png'

export const UserCard = ({ tweets, followers, avatar, user }) => {

  return <li className={css.cardItem}>
       <GoitLogo />
       <img src={cardImage} alt='cardImage'/>
    <img src={avatar} alt={user} className={css.userImg}/></li>;
};
