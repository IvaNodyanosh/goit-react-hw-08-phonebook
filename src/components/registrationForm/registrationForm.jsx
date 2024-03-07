import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { RiContactsFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { PiPasswordFill } from 'react-icons/pi';


import css from './registrationForm.module.css'

import { register } from 'store/auth/authOperations';

const RegistrationForm = () => {
  const [registrationInfo, setRegistrationInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const changeInput = e => {
    setRegistrationInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, email, password } = registrationInfo;

  const resetForm = () => {
    setRegistrationInfo(() => ({ name: '', email: '', password: '' }));
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(registrationInfo);
    dispatch(register(registrationInfo));
    resetForm();
  };

  return (
    <form onSubmit={submitForm} className={css.contactForm}>
      <label>
        <RiContactsFill className={css.contactForm__icon} />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={changeInput}
        />
      </label>
      <label>
        <MdEmail className={css.contactForm__icon} />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={changeInput}
        />
      </label>
      <label>
        <PiPasswordFill className={css.contactForm__icon} />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={changeInput}
        />
      </label>
      <button type="submit" className={css.contactForm__button}>Registration</button>
    </form>
  );
};

export default RegistrationForm;
