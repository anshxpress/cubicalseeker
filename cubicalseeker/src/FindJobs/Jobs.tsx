import { jobList } from "../Data/JobsData";
import JobCards from "./JobCards";
import Sort from "./Sort";

const Jobs=() =>{
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-sky-400">Recommended Jobs</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5">
        {
            jobList.map((job, index)=> <JobCards key={index}{...job}/>)
        }
        </div>
    </div>
}
export default Jobs;