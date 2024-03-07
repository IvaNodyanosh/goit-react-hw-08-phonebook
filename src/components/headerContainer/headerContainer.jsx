import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import css from './headerContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginUser } from 'store/getSelectors';
import { username } from 'store/getSelectors';
import { logOut } from 'store/auth/authOperations';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isLoginUser);
  const user = useSelector(username);

  const logOutUser = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        {!isLogin ? (
          <nav className={css.navigation}>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink to="/" className={css.link}>
                  Home
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="/login" className={css.link}>
                  Login
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="/registration" className={css.link}>
                  Registration
                </NavLink>
              </li>
            </ul>
          </nav>
        ) : (
          <div className={css.header__box}>
            <nav className={css.navigation}>
              <ul className={css.list}>
                <li className={css.item}>
                  <NavLink to="/" className={css.link}>
                    Home
                  </NavLink>
                </li>
                <li className={css.item}>
                  <NavLink to="/contacts" className={css.link}>
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={css.user__box}>
              <p className={css.user__text}>
                Hi, <span className={css.user__accent}>{user}</span>!
              </p>
              <button onClick={logOutUser} className={css.logout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </header>
      <main>
        <Suspense fallback={<p>...loading</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Header;
