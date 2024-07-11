import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://asn-group.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;
