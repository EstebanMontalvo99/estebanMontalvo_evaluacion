import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import Searcher from './components/Searcher';
import Footer from './components/Footer';
import useFetch from "./hooks/useFetch";

function App() {

  const [pagNumb, setPagNumb] = useState(0);
  const { users, getAllUsers } = useFetch();
  useEffect(() => {
    getAllUsers();

  }, []);
  const paginationUsers = [];
  const paginationLength = 6;
  for (let i = 0; i < users?.length; i += paginationLength) {
    const sixUsers = users.slice(i, i + paginationLength);
    paginationUsers.push(sixUsers);
  }

  return (
    <div className='main__container'>
      <Header />
      <Searcher />
      <section className='users__container'>
        {paginationUsers[pagNumb]?.map(user => (
          <Users key={user.uid} user={user} />
        ))}
      </section>
      <Footer pagNumb={pagNumb} setPagNumb={setPagNumb} paginationUsers={paginationUsers} />
    </div>
  );
}

export default App;
