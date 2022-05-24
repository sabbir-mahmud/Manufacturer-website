import React from 'react';
import Helmet from 'react-helmet';
import useLogin from '../../Hooks/useFirebase.js/useLogin';
import useSocial from '../../Hooks/useFirebase.js/useSocial';

const Login = () => {
    const handleLogin = useLogin();
    const { handleFacebookLogin, handleGoogleSignIn, handleGithubLogin } = useSocial();
    return (
        <div className='container mx-auto mb-24'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="shadow-md rounded-lg py-14">
                <div className="title">
                    <h3 className='text-center text-4xl font-bold text-primary  mb-14'>Log in to your account!</h3>
                </div>
                <div className="w-3/4 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                    <a href="/" className="label-text-alt link link-hover">Create a account</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="login" />
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center justify-center mb-5 ">
                        <button className='btn btn-primary mx-2 my-2' onClick={handleFacebookLogin}>Facebook</button>
                        <button className='btn btn-primary mx-2 my-2' onClick={handleGoogleSignIn}>Google</button>
                        <button className='btn btn-primary mx-2 my-2' onClick={handleGithubLogin}>Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;