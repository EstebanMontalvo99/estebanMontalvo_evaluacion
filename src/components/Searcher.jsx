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

      <input className='searcher__input' type="text" placeholder='NOMBRE DE USUARIO' />

    </section>
  );
};

export default Searcher;