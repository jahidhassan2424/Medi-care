import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import auth from './../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from './../hooks/useToken';

const GooleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    if (token) {
        navigate(from, { replace: true });
    }
    if (loading) {
        <Loading></Loading>
    }

    return (

        <div className='text-center'>
            <p className='text-red-500'>{error?.message.slice(9)}</p>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline w-full upperCase">Continue with google</button>
        </div >

    );
};

export default GooleSignIn;