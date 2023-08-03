import React, { useEffect, useRef, useState } from 'react';
import "../styles/searcher.css";

const Searcher = ({ users, setSelectedUser, selectedUser }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [selectedUserChanhge, setSelectedUserChanhge] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.value === '') return setFilteredUsers([]);
    setFilteredUsers(users.filter((user) => (user.username.startsWith(e.target.value.toLowerCase().trim()))));//Aqui tambien se puede cambiar el startsWith por un icludes para que busque el usuario que inclluya las letras que se van escribiendo
  };

  const handleSelect = (username) => {
    inputRef.current.value = username;
    setFilteredUsers([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedUser(users.find(user => (user.username === inputRef.current.value)));
    inputRef.current.value = "";
    setSelectedUserChanhge(!selectedUserChanhge);
  };

  useEffect(() => {
    if (!selectedUser) {
      setIsFound(false);
    }

    setTimeout(() => {
      setIsFound(true);
    }, 3000);
  }, [selectedUserChanhge]);

  return (
    <section className='searcher'>
      <div className='searcher__box'>
        <img className='searcher__butterfly' src="./butterfly.png" alt="butterfly image" />
        <h1 className='searcher__title'>BUSCADOR DE USUARIOS</h1>
        <div className="blue__ball">
          <div className="mustard__ball">
            <div className="black__ball"></div>
          </div>
        </div>
      </div>
      <form className='searcher__form' onSubmit={handleSubmit} >
        <img className='searcher__greenBall' src="./greenBall.png" alt="green ball" />
        <div className="searcher__searchBar">
          <input ref={inputRef} onChange={handleChange} className='searcher__input' type="text" placeholder='NOMBRE DE USUARIO' />
          <ul className='searcher__search__list'>
            {
              filteredUsers || filteredUsers !== [] ? filteredUsers.map(user => (
                <li key={user.uid} onClick={() => handleSelect(user.username)} className='searcher__search__list__item'>{user.username}</li>
              )) : ""
            }

          </ul>
        </div>

        <button className="searcher__btn" type='submit'><i className='bx bx-search'></i></button>
      </form>
      {
        isFound ? ""
          :
          <h2 className='searcher__found'>User not found</h2>
      }
    </section>
  );
};

export default Searcher;