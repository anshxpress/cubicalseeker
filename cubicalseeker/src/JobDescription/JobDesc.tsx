import { IconBookmarkPlus, IconMapPin } from "@tabler/icons-react";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify';


const JobDesc=()=>{
    const data= DOMPurify.sanitize(desc);
    return(
        <div className="w-2/3">
             <div className="flex justify-between">
            <div className="flex gap-2 items-justify">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold text-2xl">
                        Data scientist
                    </div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago
                        &#183; 50 Applicants</div>
                </div>
                <div className="flex flex-col gap-2 size-xs items-center">
                    <Link to="/apply-job">
                    <Button color="blue.4" size="sm" variant="light">Apply</Button>
                    </Link>
                    <IconBookmarkPlus className="text-sky-400 cursor-pointer" stroke={1.5} />
                </div>
            </div>           
        </div>
        <Divider my="xl" color="blue.5"/>
        <div className="flex justify-between">
            {
                card.map((item:any, index:number) => <div key={index} className="felx flex-col items-center gap-1">
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
                <div className="[&_h4]:text-xl" dangerouslySetInnerHTML={{__html:data}}>
                </div>
             </div>
        </div>
    ) 
}
export default JobDesc;