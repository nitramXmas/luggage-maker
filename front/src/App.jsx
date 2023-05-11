import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Luggage from './pages/Luggage';
import UserProfile from './pages/UserProfile';

function App() {
  const [visible,setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);
  return (
    <>
      <Navbar onUserClick={handleClick}/>
      <Luggage />
      {visible ? <UserProfile /> : null}
    </>
  );
}

export default App;
