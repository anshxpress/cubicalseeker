// post job service method where all job get posting and all job visible

import axios from "axios";  
const base_url="http://localhost:8080/jobs/";  
const postJob = async (job:any)=>{  
    console.log(job);
    return axios.post(`${base_url}post`, job)  
        .then(result => result.data) 
        .catch(error =>{throw error;});  
}   
const getAllJobs = async () =>{  
    return axios.get(`${base_url}getAll`)  
        .then(result => result.data) 
        .catch(error =>{throw error;});  
}
const getJob = async (id:any)=>{  
    return axios.get(`${base_url}get/${id}`)  
        .then(result => result.data)
        .catch(error =>{throw error;});  
}  

const applyJob=async (id:any, applicant:any)=>{  
    return axios.post(`${base_url}apply/${id}`, applicant)  
    .then(result => result.data)  
    .catch(error =>{throw error;});  
}
const getJobPostedBy=async (id:any)=>{  
    return axios.get(`${base_url}PostedBy/${id}`)  
        .then(result => result.data)  
        .catch(error =>{throw error;});  
}  

const changeAppStatus=async (application:any)=>{  
    return axios.post(`${base_url}changeAppStatus`, application)  
        .then(result => result.data)  
        .catch(error =>{throw error;});  
}
export{postJob, getAllJobs, getJob, applyJob, getJobPostedBy, changeAppStatus};
