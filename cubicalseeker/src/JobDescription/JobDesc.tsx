import { IconBookmarkPlus, IconMapPin } from "@tabler/icons-react";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify';


const JobDesc=(props:any)=>{
    const data= DOMPurify.sanitize(desc);
    return(
        <div className="w-2/3">
             <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
                    <img className="h-14" src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">
                        Data scientist
                    </div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago
                        &#183; 50 Applicants</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                    <Button color="blue.4" size="sm" variant="light">{props.edit?"Edit": "Apply"}</Button>
                    </Link>
                   {props.edit?<Button color="red.5" size="sm" variant="outline">Delete</Button>:<IconBookmarkPlus className="text-sky-400 cursor-pointer" stroke={1.5}/>}
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
                 <div className="font-semibold">{item.value}</div>
                 </div>)
            }
             </div>
             <Divider my="xl" color="blue.5"/>
             <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills?.map((item:any, index:any) =><ActionIcon key={item} className="!h-fit font-medium !text-sm !w-fit" color="blue.4" 
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
                    <img className="h-9" src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="font-medium text-2xl">
                        Google
                    </div>
                    <div className=" text-mine-shaft-300">10K+ Employees &bull; 3 days ago
                        &#183; 50 Applicants</div>
                </div>
                    <Link to="/company">
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