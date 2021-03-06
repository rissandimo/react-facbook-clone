import React from 'react';
import './App.css';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';

import { useStateValue } from './StateProvider';

function App() {

  // runs after user logs in
  // get user info
  const [{ user }, dispatch] = useStateValue();

  return (

    <div className="app">
    {!user ? (  //  Not logged in -> Show login page
      <Login />
    ) : (   //  Logged in -> Show user profile
      <>
        <Header />
        
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
    )}
    </div>
  );
}

export default App;
