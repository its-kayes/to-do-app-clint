import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    let [email, setEmail] = useState();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let getEmail = event => {
        setEmail(event.target.value);
    }

    let emailLogin = event => {
        event.preventDefault();
        let pass = event.target.pass.value;
        signInWithEmailAndPassword(email, pass)
        console.log(email);
    }


    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={emailLogin}>
                        <h2 className="text-2xl font-bold text-center">Login</h2>
                        <label htmlFor="email" className='mt-4'> Email </label>
                        <input name='email' onChange={getEmail} type="email" placeholder="Email" className=" input input-bordered w-full max-w-xs" />

                        <label htmlFor="pass" className='my-4'> Password </label>
                        <input name='pass' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <input type='submit' value='Login' className="mt-2 btn btn-dark w-full max-w-sm" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;