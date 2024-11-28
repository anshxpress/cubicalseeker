import { useEffect, useState } from "react";
import { jobList } from "../Data/JobsData";
import JobCards from "./JobCards";
import Sort from "./Sort";
import { getAllJobs } from "../Services/JobService";

const Jobs=() =>{
    const[jobList, setJobList] = useState([{}]);
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-sky-400">Recommended Jobs</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-row flex-wrap gap-5">
        {
            jobList.map((job, index)=> <JobCards key={index}{...job}/>)
        }
        </div>
    </div>
}
export default Jobs;