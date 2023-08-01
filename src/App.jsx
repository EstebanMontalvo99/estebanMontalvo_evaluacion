import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Users from './components/Users';
import Searcher from './components/Searcher';

function App() {

  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("https://random-data-api.com/api/v2/users?size=6")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div className='main__container'>
      <Header />
      <Searcher />
      <section className='users__container'>
        {users?.map(user => (
          <Users key={user.uid} user={user} />
        ))}
      </section>
    </div>
  );
}

export default App;
