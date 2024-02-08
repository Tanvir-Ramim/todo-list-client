import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
const TaskCard = ({task}) => {
  const [showModal,setShowModal] = useState(false)
  const showTheMOdal = ()=>{
    setShowModal(!showModal)
  }
  console.log(task)
  return (
    <div>
       <div
      className="border rounded-lg lg:p-5 sm:p-4 p-3 min-w-[250px] w-full max-w-[400px]"
     
    >
      <div className="flex gap-5 items-center">
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
            task?.status == "pending" ? "bg-[#562CFF] " : ""
          } ${task?.status == "ongoing" ? "bg-[#00B81D] " : ""} ${
            task?.status == "completed" ? "bg-[#FF7A00] " : ""
          }`}
        >
          {task?.priority}
        </div>
        {/* <div>{time.hours} : {time.minutes} :{time.seconds}</div> */}
      </div>

      <h2 className="mt-4 font-semibold "> {task.taskName}</h2>
      <p className="mt-3 text-sm ">{task?.description}</p>
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-sm mt-4">
          Deadline :{}
          
        </p>
        <button className="cursor-pointer" onClick={showTheMOdal}><FaArrowRight  className="mt-2"></FaArrowRight></button>
        
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