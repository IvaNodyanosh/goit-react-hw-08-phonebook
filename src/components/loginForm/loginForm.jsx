import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'store/auth/authOperations';

import { MdEmail } from 'react-icons/md';
import { PiPasswordFill } from 'react-icons/pi';

import css from './loginForm.module.css'

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginInfo;
  const dispatch = useDispatch()

  const changeInput = e => {
    setLoginInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

    const resetForm = () => {
    setLoginInfo(() => ({email: '', password: ''}));
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(loginInfo);
    dispatch(logIn(loginInfo))
    resetForm();
  };

  return (
    <form onSubmit={submitForm} className={css.contactForm}>
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
      <button type="submit" className={css.contactForm__button}>Login</button>
    </form>
  );
};

export default LoginForm;
