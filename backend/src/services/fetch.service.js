import axios from "axios";

const fetchGetService = async (options) => {
    const prod =  await axios(options)
    
   return prod.data
    
}



export default {
    fetchGetService
}