import { IconBookmarkPlus } from "@tabler/icons-react";
import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";

const JobDesc=()=>{
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
        <div>
            <div>Required Skills</div>
        </div>
        </div>
    ) 
}
export default JobDesc;