import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoginUser } from 'store/getSelectors'

const PublicRoute = ({ component: Component, redirectTo='' }) => {
    const isLogin = useSelector(isLoginUser);

    return !isLogin ? Component : <Navigate to={ redirectTo} />
};

export default PublicRoute