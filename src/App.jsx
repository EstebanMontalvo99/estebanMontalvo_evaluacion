import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import Searcher from './components/Searcher';
import Footer from './components/Footer';
import useFetch from "./hooks/useFetch";

function App() {

  const { users, getAllUsers } = useFetch();
  useEffect(() => {
    getAllUsers();

  }, []);
  console.log(users);

  return (
    <div className='main__container'>
      <Header />
      <Searcher />
      <section className='users__container'>
        {users?.map(user => (
          <Users key={user.uid} user={user} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
