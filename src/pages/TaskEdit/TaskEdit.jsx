import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

import PropTypes from 'prop-types';
import useAxiosNormal from "../../hooks/useAxios";
import useAllTask from "../../hooks/useAllTask";






const TaskEdit = ({task}) => {
    const [showModal,setShowModal] = useState(false)
    const {refetch}=useAllTask()
     const axiosNormal=useAxiosNormal()
    const handleSubmit=(e)=>{
      e.preventDefault()
      const newtaskName= e.target.taskName.value ;
      const newdescription= e.target.description.value ;
      const newpriority= e.target.priority.value ;
      const newdeadline= e.target.deadline.value ;
      const id= task._id
      const taskInfo= {
        newtaskName,newdescription,newpriority,newdeadline,id
      }
   
      axiosNormal.put('/allTask',taskInfo)
      .then(res=>{
        if(res.data.modifiedCount>0){
          setShowModal(false)
          refetch()
          toast.success('Successfully Update')
        }
           
      })
      .catch((err)=>{
         setShowModal(false)
       
      })
 }

   
    return (
        <div>
         <div onClick={() => { setShowModal(true) }}  className='text-xl cursor-pointer absolute right-12'>
        <FaEdit />
        </div>
        {showModal ? <div className="fixed  inset-0 z-50 flex items-center text-black justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative lg:w-[500px] md:w-[450px]  max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
            <form onSubmit={handleSubmit} >
              <div className="p-6 rounded bg-gray-200 px-10">
                <h3 className="text-lg font-semibold mb-4  text-blue-600">
                  Edit Your Task
                </h3>
                <div className="mb-4">
                  <label htmlFor="taskName" className="block mb-1">
                    Task Name
                  </label>
                  <input
                    id="taskName"
                    name="taskName"
                    type="text"
                    defaultValue={task.taskName}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                   
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={task.description}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    cols="30" rows="8"
                  ></textarea>
                  
                </div>
                <div className="mb-4">
                  <label htmlFor="priority" className="block mb-1">
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    defaultValue={task.priority}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  
                  >
                    <option value="top">Top</option>
                    <option value="medium">Medium</option>
                    <option value="less">Less</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="deadline" className="block mb-1">
                    Deadline
                  </label>
                  <input
                  defaultValue={task.deadline}
                    id="deadline"
                    name="deadline"
                    type="datetime-local"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  />
               
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => { setShowModal(false) }}
                    className="bg-red-500  px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Submit
                  </button>

                </div>
              </div>
            </form>
            <Toaster />
          </div>
        </div>
      </div> : ""}
        </div>
    );
};
TaskEdit.propTypes={
   task : PropTypes.object
}
export default TaskEdit;