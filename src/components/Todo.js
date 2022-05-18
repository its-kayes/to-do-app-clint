import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Todo = () => {
    let [user] = useAuthState(auth);
    let [tasks, setTasks] = useState();
    let email = user?.email;

    useEffect(() => {

        fetch(`http://localhost:5000/tasks/${email}`)
            .then(req => req.json())
            .then(data => {
                console.log(data);
                setTasks(data);
            })

    }, []);


    return (
        <div>
            <h1> total task:- {tasks?.length} </h1>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;