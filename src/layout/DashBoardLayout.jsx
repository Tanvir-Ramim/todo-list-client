import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex lg:flex-row flex-col    border ">
            
             <div className='lg:w-[22%]   min-h-full w-full lg:block  border-r-[5px] border-[#3e3857]'>
                    <div className='flex justify-start items-center gap-4 mt-[40px] px-[40px]'>
                         {
                             user ?.photoURL ?   <img src={user?.photoURL } className='rounded-full h-[60px] w-[60px]' alt="" /> :
                             <img src='https://i.ibb.co/7g6wkF7/blank-profile-picture-973460-1280.png' className='rounded-full h-[60px] w-[60px]' alt="" />
                         }
                       
                        <div>
                            <p className='xl:text-xl text-lg font-semibold'>{user?.displayName}</p>
                            <p className=''>{user?.email}</p>
                        </div>

                    </div>

                    <div className='px-[20px] mt-16'>
                        <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] text-white border-[#272A30] border  gap-3 text-lg font-medium'> <img src='https://raw.githubusercontent.com/mdridoyali/task-management-client/d502de9d814c6ca638cadaa12b463a8e6b3334ae/public/images/dashBoardIcon.svg' alt="" />Dashboard</button>
                        <div className="divider divide  ">OR</div>
                        <Link to={'/'}>
                            <button className='flex p-[20px] w-full rounded-xl hover:text-white border-[#272A30] hover:bg-[#282931] border  gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
                        </Link>
                        
                    </div>
                </div>

                <div className='min-h-[calc(100vh-2px)] bg-[#ffffff]'>
                    <Outlet></Outlet>
                    
                </div>
        </div>
    );
};

export default DashBoardLayout;