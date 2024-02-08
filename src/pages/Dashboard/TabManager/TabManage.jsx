import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { IoMdAdd } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import useAxiosNormal from "../../../hooks/useAxios";
import TaskShow from "../TaskShow/TaskShow";
import useAllTask from "../../../hooks/useAllTask";

const TabManage = () => {
    const [itemNumber, setItemNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);
   const axiosNormal =useAxiosNormal()
    const {allTask,isLoading,isPending,refetch}=useAllTask()

    const items = [
        {
          item: "All Tasks",
          id: 0,
        },
        {
          item: "Ongoing",
          id: 1,
        },
        {
          item: "Completed",
          id: 2,
        },
        {
          item: "Pending",
          id: 3,
        },
      ];
      if(isLoading || isPending)
      {
        return <h1>Loading............</h1>
      }
      const pending = allTask?.filter((item) => item.position == "pending");
      const ongoing = allTask?.filter((item) => item.position == "ongoing");
      const completed = allTask?.filter((item) => item.position == "completed");
      const handleSubmit=(e)=>{
           e.preventDefault()
           const taskName= e.target.taskName.value ;
           const description= e.target.description.value ;
           const priority= e.target.priority.value ;
           const deadline= e.target.deadline.value ;
           const position = "pending"
           const taskInfo= {
            taskName,description,priority,deadline,position
           }
           console.log(taskInfo)
           axiosNormal.post('/allTask',taskInfo)
           .then(res=>{
               setShowModal(false)
               console.log(res)
               toast.success('Successfully Add Your Task')
               refetch()
           })
           .catch((err)=>{
              setShowModal(false)
              console.log(err)
           })
      }
    
    return (
        <div className="">
               <div className="mt-10 ">
        <Tabs>
          <TabList className="border-b-0 flex sm:justify-between justify-center gap-3 flex-wrap">
            <div className="flex gap-3 border-b-0  sm:justify-between justify-center  flex-wrap">
              {items?.map((item) => (
                <Tab
                  onClick={() => {
                    setItemNumber(item.id);
                  }}
                  className={` rounded-full md:px-4 md:py-2 px-3 py-1 border-2 outline-none  border-[#3e3857] ${itemNumber !== item.id
                    ? "bg-[#ffffff]  cursor-pointer "
                    : "bg-[#363535]  text-white "
                    }`}
                  key={item.id}
                >
                  {item.item}
                </Tab>
              ))}
            </div>
            <div className="flex sm:justify-center justify-end  sm:items-center items-start ">
              <button onClick={() => { setShowModal(true) }} className="btn">
                Add Task <IoMdAdd className="text-black"></IoMdAdd>{" "}
              </button>
            </div>
          </TabList>
          <TabPanel>
           
           <TaskShow allTask={allTask}></TaskShow>

          </TabPanel>
          <TabPanel>

          <TaskShow allTask={ongoing}></TaskShow>
          </TabPanel>
          <TabPanel>
          <TaskShow allTask={completed}></TaskShow>
          </TabPanel>
          <TabPanel>
          <TaskShow allTask={pending}></TaskShow>
          </TabPanel>
        </Tabs>
      </div>


      {showModal ? <div className="fixed  inset-0 z-50 flex items-center text-black justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-[500px] max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
            <form  onSubmit={handleSubmit}>
              <div className="p-6 rounded bg-gray-200 px-10">
                <h3 className="text-lg font-semibold mb-4 text-black">
                  Add Task
                </h3>
                <div className="mb-4">
                  <label htmlFor="taskName" className="block mb-1">
                    Task Name
                  </label>
                  <input
                    id="taskName"
                    name="taskName"
                    type="text"
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

export default TabManage;