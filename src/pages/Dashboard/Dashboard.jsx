import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TabManage from "./TabManager/TabManage";






const Dashboard = () => {
  const { user } = useContext(AuthContext)
  



  return (
    <div className=" lg:p-[30px] md:p-[20px] p-2 ">
      <h2 className="lg:text-[30px] ml-3 mt-3 font-medium md:text-[26px] items-center text-[24px] flex flex-wrap gap-4">
        Hello, {user?.displayName}
      </h2>
      <div className=" ml-3 mt-10  flex sm:flex-row flex-col gap-5 ">
        <div className="sm:text-base text-sm  gap-2 flex flex-wrap">
          <h4 className="border-2 h-[38px] pl-2 rounded-full py-[6px] md:py-[3px]">
            Total Task
            <span className="bg-[#562CFF]  ml-1   px-5 py-1 font-bold sm:text-xl text-white rounded-full ">
              02
            </span>{" "}
          </h4>
          <h4 className="border-2 h-[38px] pl-2 rounded-full py-[6px] md:py-[3px]">
            completed
            <span className="bg-[#FF7A00] ml-1  px-5 py-1 font-bold sm:text-xl  text-white rounded-full">
              01
            </span>{" "}
          </h4>
          <h4 className="border-2 h-[38px]  pl-2 rounded-full py-[6px] md:py-[3px]">
            is ongoing{" "}
            <span className="bg-[#00B81D] ml-1  px-5 py-1 font-bold sm:text-xl  text-white rounded-full">
              01
            </span>{" "}
          </h4>
        </div>
      </div>
      <div >
       <TabManage></TabManage>
      </div>
      
    </div>
  );
};

export default Dashboard;