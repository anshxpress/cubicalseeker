import { jobList } from "../Data/JobsData";
import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents=() =>{
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-sky-400">APPLICANTS</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 justify-evenly">
            {
                talents.map((talent, index)=>{
                    return <TalentCard key={index} {...talent}/>
                })
            }
           <TalentCard/>
        </div>
    </div>
}
export default Talents;