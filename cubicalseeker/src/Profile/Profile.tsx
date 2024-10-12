import { IconBriefcase, IconMapPins } from "@tabler/icons-react";
import { Button, Divider } from '@mantine/core';
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { profile } from "../Data/TalentData";

const Profile=()=>{
    const skills =["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js",
         "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3
             border-mine-shaft-950 border-5 " src="/avatar.png" alt="" />
           </div>
            <div className=" px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">Rohan Sharma
                    <Button color="blue.4" variant="light">Message</Button> </div> 
                <div className="text-xl flex gap-1 items-center">
                    <IconBriefcase  className="h-5 w-5" stroke={1.5}/> Software Engineer &bull; Google</div>
                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
            <IconMapPins className="h-5 w-5" stroke={1.5}/> Pune,Maharastra
            </div>
         </div>
         <Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-3">About</div>
            <div className="text-sm text-mine-shaft-300 text-justify">
           As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in
            integrating front-end and back-end technologies to deliver seamless user experiences.
            With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate 
            about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.
            </div>
         </div><Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills?.map((skill:any,index:any)=><div key={index} className="bg-sky-300 font-medium bg-opacity-15 rounded-3xl text-sky-400 px-3 py-1">{skill}</div>)
                }
            </div>           
         </div>
         <Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
            {
             profile.experience?.map((exp:any,index:any)=> <ExpCard key={index} {...exp}/>)
            }
            </div>
        </div>  
        <Divider ms="xs" size="xs" my="xl" color="blue.7"/>
         <div className="px-3">
            <div className="text-3xl font-semibold mb-5">Certification</div>
            <div className="flex flex-col gap-8">
            {
             profile.certifications?.map((certi:any,index:any)=> <CertiCard key={index} {...certi}/>)
            }
            </div>
        </div>
    </div>
}
export default Profile;