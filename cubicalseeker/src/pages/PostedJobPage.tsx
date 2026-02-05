import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDecs from "../PostedJob/PostedJobDesc";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getJobPostedBy } from "../Services/JobService";
import JobDesc from "../JobDescription/JobDesc";

const PostedJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [jobList, setJobList] = useState<any[]>([]);
  const [job, setJob] = useState<any>({});
  console.log(user?.id)
  useEffect(() => {
    window.scrollTo(0, 0);
    if(user?.id){
    getJobPostedBy(user.id)
      .then((res) => {
        setJobList(res);
        if (res && res.length > 0 && Number(id) == 0)
          navigate(`/posted-jobs/${res[0].id}`);
        setJob(res.find((item: any) => item.id == id));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [id, user]);
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider size="xs" />
      <div className=" flex gap-5">
        <PostedJob job={job} jobList={jobList} />
        <PostedJobDecs {...job} />
      </div>
    </div>
  );
};
export default PostedJobPage;
