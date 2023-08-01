import React from 'react';
//nombre,imagen,correo eelctronico,genero,numero de telefono,decha de nacimiento,info de empleo,direccion,suscripcion
import "../styles/users.css";
const Users = ({ user }) => {
  console.log(user);
  return (
    <article className='user__card'>
      <div className='user__img__container'>
        <img className='user__img' src={`${user.avatar}`} alt={`${user.first_bame}`} />
      </div>
      <div className='user'>
        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
        <ul className='user__list'>
          <li className='user__list__item'>{user.email}</li>
          <li className='user__list__item'>{user.gender}</li>
          <li className='user__list__item'>{user.phone_number}</li>
          <li className='user__list__item'>{user.date_of_birth}</li>
          <li className='user__list__item'>employment: {user.employment.title}</li>
          <li className='user__list__item'>address: {`${user.address.city} ${user.address.street_address}`}</li>
          <li className='user__list__item'>subscription: {user.subscription.plan}</li>

        </ul>
      </div>
    </article>
  );
};

export default Users;