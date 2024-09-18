import { axiosPublic } from "./useAxiosPublic"

const useRoles =  () =>{
    const {data} =  axiosPublic('/user')
    return data.role
}

export default useRoles