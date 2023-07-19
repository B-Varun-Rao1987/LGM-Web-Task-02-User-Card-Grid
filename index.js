import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import UserCards from './components/user-card';
import NavBar from './components/navbar';
import './components/navbar.css';
import './components/loader.css';
import './components/user-style.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const loadUsers = async () => {
    setIsLoading(true);
    setTimeout(async () => {
    try {
      const res = await fetch('https://reqres.in/api/users?page=1');
      if (!res.ok) {
        throw new Error('Failed to fetch users');
      }
      const resData = await res.json();
      setUsers(resData.data);
    } catch (e) {
      console.log("Error in Fetching Users!");
    }
      setIsLoading(false);
    }, 2500);
  };

  return (
    <>
      <NavBar onButtonClick={loadUsers} />
      <UserCards users={users} isLoading={isLoading} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
