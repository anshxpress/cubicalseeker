import { Tabs } from "@mantine/core";
import { activeJobs, drafts } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";
import { useEffect, useState } from "react";

const PostedJob = (props: any) => {
  const [activeTab, setActiveTab] = useState<any>("ACTIVE");
  useEffect(() => {
    setActiveTab(props.job?.jobStatus || 'ACTIVE');
  }, [props.job]);
  return (
    <div className="w-1/5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div>
        <Tabs autoContrast variant="pills" defaultValue="gallery">
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
            <Tabs.Tab value="ACTIVE">
              Active[
              {
                props.jobList?.filter((job: any) => job?.jobStatus == "ACTIVE")
                  .length
              }
              ]
            </Tabs.Tab>
            <Tabs.Tab value="DRAFT">
              Draft [
              {
                props.jobList?.filter((job: any) => job?.jobStatus == "DRAFT")
                  .length
              }
              ]
            </Tabs.Tab>
            <Tabs.Tab value="CLOSED">
              Closed [
              {
                props.jobList?.filter((job: any) => job?.jobStatus == "COLSED")
                  .length
              }
              ]
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className="flex flex-col gap-2 mt-5">
              {props.jobList
                ?.filter((job: any) => job?.jobStatus == activeTab)
                .map((item: any, index: any) => (
                  <PostedJobCard key={index} {...item} />
                ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJob;
