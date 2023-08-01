import React from 'react';
import "../styles/searcher.css";
const Searcher = () => {
  const searchUser = (e) => {

  };
  return (
    <section className='searcher'>
      <div className='searcher__box'>
        <h1 className='searcher__title'>BUSCADOR DE USUARIOS</h1>
        <div className="blue__ball">
          <div className="mustard__ball">
            <div className="black__ball"></div>
          </div>
        </div>
      </div>
      <form className='searcher__form' >
        <input className='searcher__input' type="text" placeholder='NOMBRE DE USUARIO' />
        <button className="searcher__btn" type='submit'><i class='bx bx-search'></i></button>
      </form>
    </section>
  );
};

export default Searcher;