import { Link, useParams } from "react-router-dom";  
import { timeAgo } from "../Services/Utilities";

const PostedJobCard = (props:any) => {  
    const { id } = useParams();  
    console.log(props)
    return (  
        <Link to={`/posted-jobs/${props.id}`} className={` rounded-xl p-2 w-52 border-l-2 hover:bg-opacity-80 cursor-pointer border-l-bright-sun-400 ${props.id==id?"bg-sky-400 text-black":"bg-mine-shaft-900 text-mine-shaft-300"}`}>  
            <div className="text-sm font-sembold">{props.jobTitle}</div>  
            <div className="text-xs font-medium">{props.location}</div>  
            <div className="text-xs ">{props.jobStatus=="DRAFTED"?"drafted":props.jobStatus=="CLOSED"?"closed":"posted"} {timeAgo(props.postTime)}</div>  
        </Link>  
    );  
}  

export default PostedJobCard;