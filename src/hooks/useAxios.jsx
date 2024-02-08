
import axios from 'axios';

const axiosNormal=axios.create({
      baseURL:'https://todo-list-server-gamma.vercel.app'
})

const useAxiosNormal = () => {
    return  axiosNormal
};

export default useAxiosNormal;