import { useEffect, useState } from "react";
import { jobList } from "../Data/JobsData";
import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mantine/core";
import { resetFilter } from "../Slices/FilterSlice";

const Talents=() =>{
    const dispatch = useDispatch();
    const[talents, setTalents] = useState<any>([]);
    const filter = useSelector((state:any)=>state.filter);
    const[filteredTalents, setFilteredTalents] = useState<any>([]);
    useEffect(()=>{
        resetFilter()
        getAllProfiles().then((res)=>{
            setTalents(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    useEffect(()=>{
        let filterTalent = talents;
        setFilteredTalents(talents);
        console.log(filter);
        if(filter.name){
            if(filter.name) filterTalent=filterTalent.filter((talent:any)=>talent.name.toLowerCase().includes(filter.name.toLowerCase()));
            if(filter["Job Title"] && filter["Job Title"].length>0){
                filterTalent=filterTalent.filter((talent:any)=>filter["Job Title"]?.some((title:any)=>talent.jobTitle.toLowerCase().includes(title.toLowerCase())));  
            }
            if(filter.Location && filter.Location.length>0){
                filterTalent=filterTalent.filter((talent:any)=>filter.Location?.some((location:any)=>filter.location.toLowerCase().includes(location.toLowerCase())));  
            }
            if(filter.Skills && filter.Skills.length>0){
                filterTalent=filterTalent.filter((talent:any)=>filter.Skills?.some((skill:any)=>  
                    talent.skills.some((talentSkill:any)=>  
                    talentSkill.toLowerCase().includes(skill.toLowerCase()))));
            }
            if (filter.exp && filter.exp.length > 0) {  
                filterTalent = filterTalent.filter((talent: any) => filter.exp[0] <= talent.totalExp && talent.totalExp <= filter.exp[1]);  
            }
            setFilteredTalents(filterTalent);
        }
    },[filter,talents])

    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-sky-400">APPLICANTS</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 justify-evenly">
            {
                filteredTalents.lenght?filteredTalents.map((talent:any, index:any)=>
                 <TalentCard key={index} {...talent}/>): <div className="text-xl font-semibold">No talent Found</div>
                
            }
        </div>
    </div>
}
export default Talents;

