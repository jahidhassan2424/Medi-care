import id from 'date-fns/esm/locale/id/index.js';
import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import Loading from './Loading';

const RequiredAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }

    return children;


};

export default RequiredAuth;