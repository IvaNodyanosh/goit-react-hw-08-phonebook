import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoginUser } from 'store/getSelectors'
import { isRefreshingUser } from 'store/getSelectors';

const PrivateRoute = ({ component: Component, redirectTo='' }) => {
    const isLogin = useSelector(isLoginUser);
    const isRefresh = useSelector(isRefreshingUser);
    const shouldRedirect = !isLogin && !isRefresh;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute