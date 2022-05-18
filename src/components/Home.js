import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='flex justify-center item-center text-5xl text-gray-500 font-bold'> This is a To-Do App Website  <i className="mx-5 fa-solid fa-face-grin"></i>   </h1>
           </div>
           <div className='flex justify-center item-center my-16'>
               
               <button class="btn btn-outline btn-gray">See My To-Do List <i class="mx-2 fa-solid fa-angle-right"></i></button>

               <button class="btn btn-outline btn-gray">Add Task <i class="mx-2 fa-solid fa-angle-right"></i></button>
           </div>

        </div>
    );
};

export default Home;