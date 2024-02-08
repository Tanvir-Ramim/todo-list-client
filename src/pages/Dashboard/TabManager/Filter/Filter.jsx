import { useRef, useState } from "react";
import useAllTask from "../../../../hooks/useAllTask";
import TaskShow from "../../TaskShow/TaskShow";


const Filter = () => {
    const categoryRef=useRef(null)
    const [newData, setNewData] = useState([]);
      const {allTask:taskInfo}=useAllTask()
    const handleFilter=()=>{
        setNewData([])
        const info=categoryRef.current.value
       
        const filterData = taskInfo?.filter((item) => item?.priority == info);
        setNewData(filterData)
        
       }

    return (
        <div>
           <div className="flex md:flex-row flex-col  mt-4">
                <div className="flex-1 md:mb-0 mb-4 ">
                     <h1 className="text-xl font-semibold mb-1">Filter By:</h1>
                     <select onChange={handleFilter} ref={categoryRef} name="category" className="select text-lg select-bordered join-item w-[300px] md:w-[200px] h-10 ">
                        <option   className="hidden"></option>
                    
                    <option className="bg-red-600 text-white  font-semibold">top</option>
                    <option className="text-white bg-yellow-600 font-semibold" >medium</option>
                    <option  className="text-White bg-pink-700 font-semibold">less</option>
                </select>
                </div>
                </div>
                <div>
                    <TaskShow allTaskInfo={newData}></TaskShow>
                </div>
        </div>
    );
};

export default Filter;