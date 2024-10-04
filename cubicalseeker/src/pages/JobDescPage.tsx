import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDescription/JobDesc";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import RecommendedJob from "../JobDescription/RecommendedJob";

const JobDescPage=()=>{
    return(
        <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/find-jobs">
                <Button leftSection={<IconChevronsLeft size={20}/>} color="blue.4" variant="light">back</Button>
            </Link>
            <div className="flex gap-5">
              <JobDesc/>
              <RecommendedJob/>
            </div>
        </div>
    )
}
export default JobDescPage;