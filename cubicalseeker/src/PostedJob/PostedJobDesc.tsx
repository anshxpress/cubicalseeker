import { Badge, Divider, Tabs } from "@mantine/core";
import JobDesc from "../JobDescription/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindPrefrence/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDecs=(props:any)=>{
    const [arr, setArr] = useState<any>([]);
    const [tab, setTab] = useState("overview");
    const handleTab=(value:any)=>{
        setTab(value);
        if(value=="application")
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus == "APPLIED"));
        else if(value == "invited"){
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "INTERVIEWING"));  
        }  
        else if(value == "Offered") {  
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "OFFERED"));  
        }  
        else if(value == "rejected") {  
            setArr(props.applicants?.filter((x: any) => x.applicationStatus == "REJECTED"));  
        }
      }
      useEffect(()=>{
        handleTab("overview")
      },[props])
    return <div className="mt-5 w-3/4 px-5">
       {props.jobTitle?<> <div className="text-2xl font-semibold flex items-center">{props.jobTitle}
        <Badge variant="light" ml="sm" color="blue.4" size="lg">{props.jobStatus}</Badge></div>
        <div className="font-medium text-mine-shaft-300 mb-5">{props.location}</div>
        <div>
        <Tabs value={tab} onChange={handleTab} variant="outline" radius="lg" defaultValue="overview">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-blue-400">
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
        <Tabs.Tab value="invited">Invited</Tabs.Tab>
        <Tabs.Tab value="offered">Offered</Tabs.Tab>
        <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" className="[&div]:w-full"><JobDesc {...props} edit={true} closed={props.jobStatus=="CLOSED"}/> 
</Tabs.Panel>  
<Tabs.Panel value="applicants">  
  <div className="flex mt-10 flex-wrap gap-5 justify-around">  
    {  
      arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} posted={true} />) : <div className="flex mt-10 flex-wrap gap-5 justify-around">No Applicants</div>
    }  
  </div>  
</Tabs.Panel>
      <Tabs.Panel value="invited">
      {
            <div className=" flex mt-10 flex-wrap justify-evenly gap-10">
            {
                arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} invited={true}/>):<div className="flex mt-10 flex-wrap gap-5 justify-around">No Invitations</div>
            }    
             </div>
          }
      </Tabs.Panel>
      <Tabs.Panel value="offered">
      {
            <div className=" flex mt-10 flex-wrap justify-evenly gap-10">
            {
                arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} offered/>) : <div className="flex mt-10 flex-wrap gap-5 justify-around">No Offered candidiate</div>
            }    
             </div>
          }
      </Tabs.Panel>
      <Tabs.Panel value="Rejected">
      {
            <div className=" flex mt-10 flex-wrap justify-evenly gap-10">
            {
                arr?.length?arr.map((talent:any, index:any) => <TalentCard key={index} {...talent} rejected/>): <div className="flex mt-10 flex-wrap gap-5 justify-around">No Rejected candidiate</div>
            }    
             </div>
          }
      </Tabs.Panel>
    </Tabs>
        </div>
       </>:<div className="text-2xl font-semibold flex min-h-[70vh] justify-center items-center">No Job Found</div>}
    </div>
}
export default PostedJobDecs;