import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import CustomLink from './CustomLink';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    let signout = event => {
        signOut(auth)
    }

    return (
        <div>
            <div className="navbar bg-gray-200 mb-10">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">To-do App</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><CustomLink to='/'>Home</CustomLink></li>

                        <li><CustomLink to='/todo'>To-do</CustomLink></li>
                        <li><CustomLink to='/addtask'>Add Task</CustomLink></li>
                        {
                            user
                                ?
                                <li><button className='' onClick={signout} >Sign Out</button></li>
                                :
                                <li><CustomLink to='/login'>Login</CustomLink></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;