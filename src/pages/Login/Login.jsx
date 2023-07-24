import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const {signInUser, setUser, googleLogin} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
                setSuccess("Logged in successfully")
                // navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const loginGoogleHandle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-6/12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-8/12 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-[#5F264A] text-white' type="submit" value="Login" />
                        </div>
                        <label className="label">
                            <p className='text-red-600'><small>{error}</small></p>
                            <p className='text-green-600'><small>{success}</small></p>
                        </label>
                        <label className="label">
                            <Link to='/signup' className="label-text-alt link link-hover">new at College Spotlight</Link>
                        </label>
                        <div className="divider">OR</div>
                        <button onClick={loginGoogleHandle} className='flex items-center justify-center gap-2 text-white btn bg-[#5F264A]'>
                            <FaGoogle size={20} />
                            <span>Login with Google</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;