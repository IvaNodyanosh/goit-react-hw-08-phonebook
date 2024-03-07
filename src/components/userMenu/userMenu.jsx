import { username } from 'store/getSelectors';
import { logOut } from 'store/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import css from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(username);

  const logOutUser = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.user__box}>
      <p className={css.user__text}>{user}</p>
      <button onClick={logOutUser} className={css.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
