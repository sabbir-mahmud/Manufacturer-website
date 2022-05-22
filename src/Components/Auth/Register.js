import React from 'react';
import useRegister from '../../Hooks/useFirebase.js/useRegister';

const Register = () => {
    const handleSignUp = useRegister();
    return (
        <div className='container mx-auto mt-14 mb-24'>
            <div className="shadow-md rounded-lg py-14">
                <div className="title">
                    <h3 className='text-center text-4xl font-bold text-primary  mb-14'>Create a new account!</h3>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="w-3/4 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='displayName' placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email " name="email" placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                    <a href="/" className="label-text-alt link link-hover">Create a account</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;