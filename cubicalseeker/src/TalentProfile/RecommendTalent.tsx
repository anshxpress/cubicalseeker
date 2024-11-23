import { useParams } from "react-router-dom";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindPrefrence/TalentCard";
import Talents from "../FindPrefrence/Talents";

const RecommendTalent=(props:any)=>{
    const {id} = useParams();
    return <div>
        <div className="text-xl font-semibold mb-5">Recommended Applicants</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {props.talents?.map((talent: any,index: any)=>index<4 && id!=talent.id && <TalentCard key={index}{...talent}/>)}
        </div>
    </div>
}
export default RecommendTalent;