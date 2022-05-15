import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import GooleSignIn from '../Shared/GooleSignIn';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [stateUser, loading, stateError] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        signInLoading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [from, user])

    if (error) {
        signInError = <p className='text-red-500'>{error?.message.slice(9)}</p>
    }
    if (signInLoading) {
        <Loading></Loading>
    }


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (

        // Daisy UI Login Form
        <div className=' flex justify-center items-center mt-16 '>
            <div className="card min-w-[30%] shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title text-center mb-6">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Enter your Email</label>
                        <input type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: true,
                                message: "Email is required"
                            },
                                {
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Provide a valid Email"
                                })}
                        />


                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
                        </label>
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Type here"
                            className="input input-bordered w-full mb-2 "
                            {...register("password", {
                                required: true
                            },
                                {
                                    minLength: 6
                                }
                            )}
                        />
                        <label className="label">
                            {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password.message}</span>}
                        </label>
                        <Link to="/reset-password" className='font-bold '>Forget Password?</Link>

                        {signInError}
                        <div className="card-actions justify-center">
                            <button className="btn btn-neutral w-full hover:bg-zinc-500 mt-2 mt-5 mb-3">Login</button>
                        </div>
                        <p>New to Medi-Care? <Link to="/register" className='text-secondary font-bold'>Create account</Link></p>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>

                        {/* Google Login Button */}
                        <div className='w-full '>
                            <GooleSignIn></GooleSignIn>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Login;