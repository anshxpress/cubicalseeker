import { IconBookmark, IconBookmarkFilled, IconBookmarkPlus, IconMapPin } from "@tabler/icons-react";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from "dompurify";
import { timeAgo } from "../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { useEffect, useState } from "react";


const JobDesc=(props:any)=>{
    const profile = useSelector((state:any)=>state.profile);
    const data= DOMPurify.sanitize(props.description);
    const [applied, setApplied] = useState(false);
    const user = useSelector((state:any)=>state.user);
    const dispatch = useDispatch();
    const handleSaveJob=()=> {  
        let savedJobs:any=[...profile.savedJobs];  
        if(savedJobs?.includes(props.id)){  
            savedJobs=savedJobs.filter((id:any)=>id!==props.id);  
        }else{  
            savedJobs=[...savedJobs, props.id];  
        }  
        let updatedProfile={...profile, savedJobs:savedJobs};  
        dispatch(changeProfile(updatedProfile));  
    }
    useEffect(()=>{
        if(props.applicants?.filter((applicant:any)=>applicant.applicantId==user.id).length>0) {  
            setApplied(true);  
        }
        else setApplied(false);
    },[props])
    return(
        <div>
        <div className="w-2/3">
             <div className="flex justify-between item-center">
            <div className="flex items-center gap-2">
                <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
                    <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-semibold text-2xl">
                        {props.jobtitle}
                    </div>
                </div>
                    <div className="text-lg text-mine-shaft-300">{props.company} &bull; {timeAgo(props.postTime)}  &bull; {props.applicants?props.applicants.length:0} applicant</div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    {(props.edit || !applied) &&<Link to={`/apply-job/${props.id}`}>
                        <Button color="blue.4" size="sm" variant="light">{props.edit?"Edit": "Apply"}</Button>
                     </Link>
                    }
                    {
                      !props.edit && applied && <Button color="green.4" size="sm" variant="light">{props.edit?"Edit": "Applied"}</Button> 
                    }
                    {props.edit ? <Button color="red.4" size="sm" variant="light">Delete</Button>: profile.savedJobs?.includes(props.id)?  
                    <IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400" stroke={1.5}/> :
                    <IconBookmark onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400 hover:text-bright-sun-400 text-mine-shaft-300" stroke={1.5}/>}
                </div>
            </div>           
        </div>
        <Divider my="xl" color="blue.5"/>
        <div className="flex justify-between">
            {
                card.map((item:any, index:number) => <div key={index} className="flex flex-col items-center gap-1">
                <ActionIcon className="!h-12 !w-12" color="blue.4" variant="light" size="lg" radius="xl"  aria-label="Settings">
                     <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                 </ActionIcon>
                 <div className="text-sm text-mine-shaft-300">{item.name}</div>
                 <div className="font-semibold">{props?props[item.id]:"NA"} {item.id=="packageOffered" && <>LPA</>}</div>
                 </div>)
            }
             </div>
             <Divider my="xl" color="blue.5"/>
             <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        props.skillsRequired?.map((item:any, index:any) =><ActionIcon key={item} className="!h-fit font-medium !text-sm !w-fit" color="blue.4" 
                        variant="light" p="xs" radius="xl"  aria-label="Settings">{item}
                    </ActionIcon>)
                    }
                </div>
                <Divider my="xl" color="blue.5"/>
                <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-sky-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold
                 [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
                 dangerouslySetInnerHTML={{__html:data}}>
                </div>
                <Divider my="xl" color="blue.5"/>
                <div>
                    <div className="text-xl font-semibold mb-5">About the Company</div>
                    <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-9" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-medium text-2xl">
                        {props.company}
                    </div>
                    <div className=" text-mine-shaft-300">10K+ Employees &bull; 3 days ago
                        &bull; 50 Applicants</div>
                </div>
                    <Link to={`/company/${props.company}`}>
                    <Button color="blue.4" variant="light">Company Page</Button>
                    </Link>  
                </div>    
            </div>
            <div className=" text-mine-shaft-300 text-justify py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ipsam obcaecati, velit iusto voluptate numquam cupiditate assumenda ad? Obcaecati nemo ratione eaque dicta facilis nihil tempora debitis soluta, repellendus excepturi tenetur asperiores ea blanditiis, quisquam quam. Quam, dignissimos. Doloremque, magnam.</div>
        </div>
     </div>
</div>
    ) 
}
export default JobDesc;