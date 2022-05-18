import React from 'react';
import auth from '../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';


const AddTask = () => {

    const [user, loading, error] = useAuthState(auth);

    let taskDetails = event => {
        event.preventDefault();
        let name = event.target.name.value;
        let description = event.target.description.value;

        let data = {
            name: name,
            description: description,
            email: user?.email
        }

        fetch('https://vast-refuge-77767.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));

        event.target.reset();
    }


    return (
        <div>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={taskDetails}>
                            <h2 className="text-2xl font-bold text-center"> Add to Task </h2>
                            <label htmlFor="name" className='mt-4'> Task Name  </label>
                            <input name='name' type="text" placeholder="Task Name" className=" input input-bordered w-full max-w-xs" />

                            <label htmlFor="description" className='my-4'> Description </label>
                            <textarea rows="4" cols="50" name='description' type="text" placeholder="Description of Your Task" className="input input-bordered w-full max-w-xs" />
                            <input type='submit' value='Add' className="mt-2 btn btn-dark w-full max-w-sm" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;