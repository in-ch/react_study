import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ResponseCheck from '../4.reaction_velocity/component/ResponseCheck';

const router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="./4.reaction_velocity" component={ResponseCheck}></Route>
      </div>
    </BrowserRouter>
  );
};

export default router;