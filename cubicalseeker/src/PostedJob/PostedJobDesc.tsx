import { Badge, Tabs } from "@mantine/core";
import AboutComp from "../CompanyProfile/AboutComp";
import CompEmployee from "../CompanyProfile/CompEmployee";
import JobsComp from "../CompanyProfile/JobsComp";
import JobDesc from "../JobDescription/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindPrefrence/TalentCard";

const PostedJobDecs=(props:any)=>{
    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center">Software Enginner
        <Badge variant="light" ml="sm" color="blue.4" size="lg">Badge</Badge></div>
        <div className="font-medium text-mine-shaft-300 mb-5">New Delhi</div>
        <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-blue-400">
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
        <Tabs.Tab value="invited">Invited</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" className="[&>div]:w-full"> 
        <JobDesc edit/>
      </Tabs.Panel>
      <Tabs.Panel value="applicants">
          {
            <div className=" flex mt-10 flex-wrap justify-evenly gap-10">
            {
                talents.map((talent, index)=>index<6 &&
                <TalentCard key={index} {...talent} posted/>)
            }    
             </div>
          }
      </Tabs.Panel>
      <Tabs.Panel value="invited">
      {
            <div className=" flex mt-10 flex-wrap justify-evenly gap-10">
            {
                talents.map((talent, index)=>index<6 &&
                <TalentCard key={index} {...talent} invited/>)
            }    
             </div>
          }
      </Tabs.Panel>
    </Tabs>
        </div>
    </div>
}
export default PostedJobDecs;