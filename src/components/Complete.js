import React, { useEffect, useState } from 'react';

const Complete = () => {

    let [tasks, setTasks] = useState();


    let role = "complete";
    let url =`http://localhost:5000/tasks/${role}`
    useEffect(() => {

        fetch(url)
            .then(req => req.json())
            .then(data => {
                console.log(data);
                setTasks(data);
            })
    }, []);

    return (
        <div>
            <h1 className='text-center text-4xl font-bold'> Total Complete Task:- {tasks?.length} </h1>

            <div className='h-screen items-center flex justify-center'>
                <div className=' grid grid-cols-3 gap-10 '>
                    {
                        tasks?.map(task =>
                            <div>
                                <div class="card w-96 bg-gray-200 shadow-xl">
                                    <div className='card-body'>
                                        <h2 class="card-title font-bold"> Title:- {task.name}</h2>
                                        <p> Description:- {task.description}</p>
                                        {/* <div class="card-actions justify-between">
                                            <button onClick={() => update(task._id)} className='btn bg-green-600' > Update </button>
                                            <button onClick={() => complete(task._id)} className='btn bg-green-600' > Complete </button>
                                            <button onClick={() => deleteTask(task._id)} class="btn bg-rose-600">Delete</button>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* <div className='flex items-center justify-center my-20'>
                <input onChange={handleCheck} type="checkbox" className='w-10 h-10 rounded-lg' /> <p className='px-3 text-xl font-bold'> Complete </p>
            </div> */}
            </div>
        </div>
    );
};

export default Complete;