import React from 'react'

const ProjectCreate = () => {
  return (
    <div>
        <div className='w-vw border'>
          <div className="flex flex-row px-4 mx-4">
            <button className="my-3 mx-3 px-3 font-bold border">New Project</button>
          </div>
        </div>
        <div className="flex flex-row px-4 mx-4 mt-8">
            <button className="my-3 mx-3 px-3 font-bold border">New Project</button>
        </div>
        <div>
          <div className='mx-8 mt-8'>
            <div className='flex flex-row mx-4'>
              <div className='w-[200px] h-[100px] border mr-3'>
                <div className='w-[150px] h-[80px] flex items-center border mx-4 my-2 px-3 font-bold' >
                  Create Project WBS Template
                </div>
              </div>
              <div className='w-[200px] h-[100px] border mx-3'>
                <div className='w-[150px] h-[80px] flex items-center border mx-4 my-2 px-3 font-bold' >
                  Create Project WBS Web Form
                </div>
              </div>
              <div className='w-[200px] h-[100px] border mx-3'>
                <div className='w-[150px] h-[80px] flex items-center border mx-4 my-2 px-3 font-bold' >
                  Create Project WBS MSP
                </div>
              </div>
              <div className='w-[200px] h-[100px] border mx-3'>
                <div className='w-[150px] h-[80px] flex items-center border mx-4 my-2 px-3 font-bold' >
                  Import Project WBS Excel
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default ProjectCreate
