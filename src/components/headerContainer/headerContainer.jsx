import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import css from './headerContainer.module.css';
import { useSelector } from 'react-redux';
import { isLoginUser } from 'store/getSelectors';
import UserMenu from 'components/userMenu/userMenu';

const Header = () => {
  const isLogin = useSelector(isLoginUser);

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
              <UserMenu/>
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
