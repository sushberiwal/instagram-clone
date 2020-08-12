import React from 'react';

import NavBar from './components/navbar/navbar.jsx';
import Feed from './components/feed/feed.jsx';
import Profile from './components/profile/profile.jsx';
import user from './data/user';
import "./App.css";

const App = () => {
  return ( 
    <React.Fragment>
      <NavBar /> 
      <div className="app__content">
      <Feed />
      <Profile />
      </div> 
    </React.Fragment>
   );
}
 
export default App;