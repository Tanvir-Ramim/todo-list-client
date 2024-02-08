import { useQuery } from "@tanstack/react-query";
import useAxiosNormal from "./useAxios";
import ErrorPage from "../components/errorPage/ErrorPage";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAllTask = () => {
    const axiosNormal=useAxiosNormal()
     const {user}=useContext(AuthContext)
    const allTaskFn=async()=>{
          const res=await axiosNormal.get('/allTask')
          return res
    }

    const {data , isLoading,isPending,refetch,isError}=useQuery({
          queryKey :['allTask',user],
          queryFn : allTaskFn
    })
    if(isLoading || isPending)
    {
         return <h1>Loading..........</h1>
    }
    if(isError){
         return <ErrorPage></ErrorPage>
    }
    
    const allTask=data?.data
    return {allTask, isLoading,isPending,refetch}
};

export default useAllTask;