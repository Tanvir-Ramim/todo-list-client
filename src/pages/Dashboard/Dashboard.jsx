import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" lg:p-[30px] md:p-[20px] p-2">
           
      <h2 className="lg:text-[30px] ml-3 mt-3 font-medium md:text-[26px] items-center text-[24px] flex flex-wrap gap-4">
        Hello, {user?.displayName}
      </h2>
        </div>
    );
};

export default Dashboard;