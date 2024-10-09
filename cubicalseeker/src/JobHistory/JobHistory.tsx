import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import Card from "./Card";

const JobHistory=()=>{
    return <div className="">
     <div className="text-2xl font-semibold mb-5">Job History</div>
        <div>
         <Tabs variant="outline" radius="lg" defaultValue="About">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-blue-400">
        <Tabs.Tab value="applied">Applied</Tabs.Tab>
        <Tabs.Tab value="saved">Saved</Tabs.Tab>
        <Tabs.Tab value="offered">Offered</Tabs.Tab>
        <Tabs.Tab value="interview">Interview</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="applied">
      <div className="mt-10 flex flex-wrap gap-5">
        {
            jobList.map((job, index)=> <Card key={index}{...job} applied />)
        }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="saved">
      <div className="mt-10 flex flex-wrap gap-5">
        {
            jobList.map((job, index)=> <Card key={index}{...job} saved/>)
        }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="offered">
      <div className="mt-10 flex flex-wrap gap-5">
        {
            jobList.map((job, index)=> <Card key={index}{...job} offered/>)
        }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="interview">
      <div className="mt-10 flex flex-wrap gap-5">
        {
            jobList.map((job, index)=> <Card key={index}{...job} interview/>)
        }
        </div>
      </Tabs.Panel>
    </Tabs>
         </div>
</div>
}
export default JobHistory;