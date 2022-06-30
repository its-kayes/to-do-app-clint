import React from 'react';
import { Link } from 'react-router-dom';
import AddTask from './AddTask';
import Todo from './Todo';

const Home = () => {
    return (
        <div>
            {/* <div>
                <h1 className='flex justify-center item-center text-5xl text-gray-500 font-bold'> This is a To-Do App Website  <i className="mx-5 fa-solid fa-face-grin"></i>   </h1>
            </div>
            <div className='flex justify-center item-center my-16'>

                <button class="btn btn-outline btn-gray"> <Link to='/todo'> See My To-Do List </Link> <i class="mx-2 fa-solid fa-angle-right"></i></button>

                <button class="mx-4 btn btn-outline btn-gray"><Link to='/addtask'>  Add Task </Link> <i class=" px-2 fa-solid fa-plus"></i></button>
            </div> */}

            <AddTask> </AddTask>
            
            <div class="divider my-10"></div> 

            <Todo></Todo>

        </div>
    );
};

export default Home;