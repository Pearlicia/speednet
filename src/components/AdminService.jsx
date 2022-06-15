import React from 'react'

const AdminService = () => {
  return (
    <div>
      <div>
        <div className='w-vw border'>
          <div className="flex flex-row px-4 mx-4">
            <button className="my-3 mx-3 px-3 font-bold border">Home</button>
            <button className="my-3 mx-3 px-3 font-bold border">Self-service</button>
          </div>
        </div>
        <div>
          <div className="flex flex-row flex-3 px-4 ml-8">
            <div className='flex flex-col'>
              <button className="h-[50px] mx-3 px-3 font-bold border">Self Dashboard</button>
              <button className=" h-[50px] mx-3 px-3 font-bold border">Tools</button>
              
              <button className="h-[50px] mt-8 mx-3 px-3 font-bold border">Query and Reporting</button>
            </div>
            <div className='flex flex-col mt-10'>
              <div className='flex mt-2'>
                <select name="assign" className='flex items-center justify-center mt-1 mx-3 px-6'>
                    <option>Create Project</option>
                    <option>Tracking Project</option>
                </select>
              </div>
              
              {/* <button className=" mx-3 px-3 font-bold border">Create Project</button> */}
              {/* <button className=" mx-3 px-3 font-bold border">Tracking Project</button> */}
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default AdminService
