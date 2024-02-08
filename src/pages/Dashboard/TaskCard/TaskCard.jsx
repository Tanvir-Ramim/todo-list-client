import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosNormal from '../../../hooks/useAxios';
import useAllTask from '../../../hooks/useAllTask';


import TaskEdit from '../../TaskEdit/TaskEdit';
const TaskCard = ({task}) => {
  const [showModal,setShowModal] = useState(false)
  const showTheMOdal = ()=>{
    setShowModal(!showModal)
  } 
  

  const {refetch}=useAllTask()

  const axiosNormal=useAxiosNormal()
  
 
  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure Delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res=await axiosNormal.delete(`/allTaskdele/${id}`)
            
            if(res.data.deletedCount>0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });

            }
        }
      });

       
}
  return (
    <div className='relative '>
       <div
      className="border rounded-lg lg:p-5 sm:p-4 h-64  p-3 w-[350px]  max-w-[400px]"
     
    >
      <div className="flex relative gap-5 items-center">
        <div
          className={`px-3 py-2 text-white w-fit rounded-full text-[12px] ${
            task?.position == "pending" ? "bg-[#562CFF] " : ""
          } ${task?.position == "ongoing" ? "bg-[#00B81D] " : ""} ${
            task?.position == "completed" ? "bg-[#FF7A00] " : ""
          }`}
        >
          {task?.position}
        </div>
        <div
          className={`px-3 py-2 text-white w-fit rounded-full text-[12px] ${
            task?.priority == "top" ? "bg-red-600 " : ""
          } ${task?.priority == "medium" ? "bg-yellow-600 " : ""} ${
            task?.priority == "less" ? "bg-pink-600 " : ""
          }`}
        >
          {task?.priority}
        </div>
        <div onClick={()=>handleDelete(task._id)} className='text-2xl cursor-pointer absolute right-0'>
        <MdDeleteForever />
        </div>
        <div className='text-2xl cursor-pointer absolute right-0 top-2'>
          <TaskEdit task={task}></TaskEdit>
        </div>
        
      </div>

      <h2 className="mt-4 font-semibold "> {task.taskName}</h2>
      <p className="mt-3 text-sm ">{task?.description.slice(0,200)}</p>
      <div className="flex absolute bottom-0  py-3 items-end justify-between  gap-32">
        <div>
        <p className="text-sm mt-4">
          Deadline : {task.deadline}
          
        </p>
        </div>
       <div> <button className="cursor-pointer flex" onClick={showTheMOdal}><FaArrowRight  className="mt-2"></FaArrowRight></button></div>
        
      </div>
      {/* {
        showModal && <TaskDetailsModal taskDetails={task} onUpdate={onUpdate} onClose={showTheMOdal}></TaskDetailsModal>
      } */}
      
    </div>
    </div>
  );
};
TaskCard.propTypes ={
   task: PropTypes.object
}
export default TaskCard;