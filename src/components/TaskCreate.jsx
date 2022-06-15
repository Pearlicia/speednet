import React from 'react';
import DatePicker from './DatePicker'


const TaskCreate = () => {
  return (
    <div>
      <div className='w-vw border'>
          <div className="flex flex-row px-4 mx-4">
            <button className="my-3 mx-3 px-3 font-bold border">Create Task</button>
          </div>
      </div>
      <div className='mx-8 mt-8'>
            <div className='flex flex-row mx-4'>
              <div className='w-[200px] h-[100px] border mr-3'>
                <button className='w-[150px] h-[80px] flex items-center border mx-4 my-2 px-3 font-bold' >
                  + Add Task
                </button>
              </div>
            </div>
      </div>
      <div className='flex flex-row justify-end ml-8 mr-8 items-center'>
        <div className=' mt-8'>
              <div className='flex flex-row mx-4'>
                <div className='w-[200px] h-[100px] border mr-3'>
                  <button className='w-[150px] h-[80px] flex items-center border mx-4 my-2 px-3 font-bold' >
                    + Add Sub Task
                  </button>
                </div>
              </div>
        </div>
        
        <div className='w-[100px] h-[50px] border mr-3 mt-8 flex items-center mx-2 my-2 px-4 font-bold'>
          Assign
        </div>
        <select name="assign" className='flex items-center justify-center mt-8'>
            <option>Resource</option>
            <option>Personal</option>
            <option>Project</option>
        </select>
        
    
        <div className='w-[100px] h-[50px] border mr-3 mt-8 flex items-center mx-4 my-2 px-4 font-bold'>Duration</div>
        <div className='w-[100px] h-[50px] border mr-3 mt-8 flex items-center mx-4 my-2 px-4 font-bold'>Start Date</div>
        <div><DatePicker /></div>
        <div className='w-[100px] h-[50px] border mr-3 mt-8 flex items-center mx-4 my-2 px-4 font-bold'>End Date</div>
        <div><DatePicker /></div>
        

        

      </div>
      
          
    </div>
  )
}

export default TaskCreate
