
import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import Loading from './Loading';
import useAdmin from './../hooks/useAdmin';

const RequiredAdmin = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }

    return children;


};

export default RequiredAdmin;