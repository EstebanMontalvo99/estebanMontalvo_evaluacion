import React from 'react';
import "../styles/footer.css";

const Footer = ({ pagNumb, setPagNumb, paginationUsers }) => {

  const next = () => {
    setPagNumb(pagNumb + 1);
  };
  const prev = () => {
    setPagNumb(pagNumb - 1);
  };
  const selectNum = (e) => {
    const number = parseInt(e.target.textContent);
    setPagNumb(number - 1);
  };
  return (
    <ul className='pagination__list'>

      {pagNumb <= 0 ? <></> : <li onClick={prev} className='pagination__item arrow'><i className='bx bx-chevron-left'></i></li>}

      {paginationUsers.map((num, index) => (
        <li key={index} onClick={selectNum} className={`pagination__item ${index === pagNumb ? 'active' : ''}`}>{index + 1}</li>
      ))}
      {pagNumb >= 4 ? <></> : <li onClick={next} className='pagination__item arrow'><i className='bx bx-chevron-right'></i></li>}
    </ul>
  );
};

export default Footer;