import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Tweets } from 'pages/Tweets/Tweets';

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};
