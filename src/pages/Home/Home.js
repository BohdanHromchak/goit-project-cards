import React from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import welcome from '../../images/welcome.avif';

export const Home = () => {
  return (
    <React.Fragment>
      <div className={css.container}>
        <img src={welcome} alt="welcome" />
        <Link to="/tweets" className={css.link}>
          Go to tweets
        </Link>
      </div>
    </React.Fragment>
  );
};
