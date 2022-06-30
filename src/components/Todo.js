import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Todo = () => {
    let [check, setCheck] = useState(false);
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


    let deleteTask = id => {
        let sureDelete = window.confirm(" Are You Sure to Delete this Products ? ");
        if (sureDelete) {
            let url = `http://localhost:5000/tasks/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        let presentTask = tasks.filter(task => task._id !== id);
                        setTasks(presentTask);
                    }
                })
        }
    }

    let handleCheck = event => {
        check ? setCheck(false) : setCheck(true);
        console.log(check);
        if (!check) {
            toast.success(" All Task Done ");
        }

    }

    return (
        <div>
            <h1 className='text-center text-4xl mb-16  font-bold'> My Total Task:- {tasks?.length} </h1>
            <div className='flex justify-around'>
                {
                    tasks?.map(task =>
                        <div>
                            <div class="card w-96 bg-gray-200 shadow-xl">
                                <div class={`card-body ${(check === true) ? "line-through" : "no-underline"}`}>
                                    <h2 class="card-title">{task.name}</h2>
                                    <p>{task.description}</p>
                                    <div class="card-actions justify-end">
                                        <button onClick={() => deleteTask(task._id)} class="btn bg-rose-600">Delete</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex items-center justify-center my-20'>
                <input onChange={handleCheck} type="checkbox" className='w-10 h-10 rounded-lg' /> <p className='px-3 text-xl font-bold'> Complete </p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Todo;