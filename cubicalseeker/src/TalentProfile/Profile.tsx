import { IconBriefcase, IconMapPins } from "@tabler/icons-react";
import { Button, Divider } from '@mantine/core';
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile=(props:any)=>{
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3
             border-mine-shaft-950 border-5 " src="/avatar.png" alt="" />
           </div>
            <div className=" px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">{props.name}
                    <Button color="blue.4" variant="light">Message</Button> </div> 
                <div className="text-xl flex gap-1 items-center">
                    <IconBriefcase  className="h-5 w-5" stroke={1.5}/> {props.role} &bull; {props.company}</div>
                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
            <IconMapPins className="h-5 w-5" stroke={1.5}/> {props.location}
            </div>
         </div>
         <Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-3">About</div>
            <div className="text-sm text-mine-shaft-300 text-justify">
            {props.about}
            </div>
         </div><Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    props.skills?.map((skill:any,index:any)=><div key={index} className="bg-sky-300 font-medium bg-opacity-15 rounded-3xl text-sky-400 px-3 py-1">{skill}</div>)
                }
            </div>           
         </div>
         <Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
            {
                props.experience?.map((exp:any, index:any)=><ExpCard key={index}{...exp}/>)
            }
            </div>
        </div>  
        <Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-5">Certification</div>
            <div className="flex flex-col gap-8">
            {
                props.certifications?.map((certi:any, index:any)=><CertiCard key={index} {...certi}/>)
            }
            </div>
        </div>
    </div>
}
export default Profile;