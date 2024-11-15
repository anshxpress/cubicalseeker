import { Button, Divider } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import CertiCard from "../TalentProfile/CertiCard";

const TalentProfile=()=>{
    return(
        <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/find-talent">
                <Button leftSection={<IconChevronsLeft size={20}/>} color="blue.4" variant="light">back</Button>
            </Link>
            <div className="flex gap-5">
              <Profile {...profile}/>
              <RecommendTalent/>
            </div>
        </div>
    )
}
export default TalentProfile;