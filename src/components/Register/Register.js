import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import GooleSignIn from '../Shared/GooleSignIn';
import auth from './../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from './../hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [updateProfile, updating, updateUserError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user);
    if (token) {
        navigate(from, { replace: true });
    }
    let createError;
    if (error) {
        createError = <p>{error.message}</p>
    }
    // On submit
    const onSubmit = async (data) => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });

        console.log('Display Name Updated');
    }
    return (
        <div className='flex justify-center mt-16'>
            <div className="card min-w-[30%] shadow-xl ">
                <div className="card-body">
                    <h1 className='text-4xl text-center font-bold mb-10'>Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">

                            {/* Field -1 */}
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full "
                                {...register("name", {
                                    required: true
                                })}

                            />
                            <p>{errors.name?.type === 'required' && <p className='text-red-500'>First name is required</p>}</p>

                            {/* Field -2 */}
                            <label className="label">
                                <span className="label-text">Your Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered  w-full "
                                {...register("email", {
                                    required: true
                                })}

                            />
                            <p>{errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}</p>

                            {/* Field -3 */}
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered  w-full "
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6
                                    }
                                )}
                            />
                            <p>{errors.password?.type === 'required' && "Password is required"}</p>
                            <p>{errors.password?.type === 'minLength' && "Password should be at least 6 characters"}</p>

                            {/* Submit Button */}
                            <p>{createError}</p>
                            <button className="btn  mt-5 mb-3 btn-neutral">Register</button>
                        </div>
                        <p>Already have account? <Link to="/login" className='text-secondary font-bold '>Login</Link></p>
                    </form>
                    <div>
                        <GooleSignIn></GooleSignIn>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;