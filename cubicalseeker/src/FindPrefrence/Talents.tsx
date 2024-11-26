import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../Slices/FilterSlice";

const Talents=() =>{
    const dispatch = useDispatch();
    const[talents, setTalents] = useState<any>([]);
    const filter = useSelector((state:any)=>state.filter);
    const[filteredTalents, setFilteredTalents] = useState<any>([]);
    useEffect(()=>{
        // resetFilter()
        getAllProfiles().then((res)=>{
            console.log(res)
            setTalents(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    useEffect(() => {  
        let filterTalent = talents; // this use for the search bar at for filter search and sorting
        setFilteredTalents(talents);  
        console.log(filter);  
        if(filter.name)filterTalent = filterTalent.filter((talent : any) => talent.name.toLowerCase().includes(filter.name.toLowerCase()));
        setFilteredTalents(filterTalent);
    }, [filter, talents]);

    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-sky-400">APPLICANTS</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 justify-evenly">
            {
                talents.length > 0 ? talents.map((talent:any, index:any)=>
                 <TalentCard key={index} {...talent}/>): <div className="text-xl font-semibold">No talent Found</div>
                
            }
        </div>
    </div>
}
export default Talents;

