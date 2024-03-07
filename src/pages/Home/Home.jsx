import { useSelector } from 'react-redux';
import { isLoginUser } from 'store/getSelectors';
import { username } from 'store/getSelectors';
import css from './Home.module.css'

const Home = () => {
    const isLogin = useSelector(isLoginUser);
    const user = useSelector(username)

  return (
    <p className={css.text}>
      {isLogin
        ? `Thank you for registering on our website, ${user}! Don't forget to share our site with your friends!`
        : `Register on our website and save your contacts!`}
    </p>
  );
};

export default Home;
