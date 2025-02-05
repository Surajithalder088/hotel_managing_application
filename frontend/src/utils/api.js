import axios from "axios"

const api="http://localhost:7070"

export const fetchingServiceList=async()=>{
  const list= await axios.get(api+'/api/service/service-all')

  const data=(list.data.allServices);
  return data;
  
}