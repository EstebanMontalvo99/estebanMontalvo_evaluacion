import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import Searcher from './components/Searcher';
import Footer from './components/Footer';
import useFetch from "./hooks/useFetch";

function App() {
  //Estado que servira para traer los usuarios de la API
  const { users, getAllUsers } = useFetch();

  const [selectedUser, setSelectedUser] = useState();

  const [pagNumb, setPagNumb] = useState(0);


  useEffect(() => {
    getAllUsers();
  }, []);

  //Haciendo paginacion al dividir los 30 usuarios en arreglos de 6
  const paginationUsers = [];
  const paginationLength = 6;
  for (let i = 0; i < users?.length; i += paginationLength) {
    const sixUsers = users.slice(i, i + paginationLength);
    paginationUsers.push(sixUsers);
  }



  return (
    <div className='main__container'>
      <Header />

      <Searcher users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />



      <section className='users__container'>
        {selectedUser ? (
          <Users key={selectedUser?.uid} user={selectedUser} />
        ) : (
          paginationUsers[pagNumb]?.map(user => (
            <Users key={user.uid} user={user} />
          ))

        )}
      </section>

      {selectedUser ? (
        ""
      ) : (
        <Footer pagNumb={pagNumb} setPagNumb={setPagNumb} paginationUsers={paginationUsers} />

      )}

    </div >
  );
}

export default App;

