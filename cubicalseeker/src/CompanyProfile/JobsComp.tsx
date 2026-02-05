import { jobList } from "../Data/JobsData";
import JobCards from "../FindJobs/JobCards";

const JobsComp = ({ company }: any) => {
  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-5">
        {jobList
          .filter((job) => job.company == company)
          .map((job, index) => (
            <JobCards key={index} {...job} />
          ))}
      </div>
    </div>
  );
};
export default JobsComp;