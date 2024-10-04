import { IconChevronsLeft } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage=()=>{
    return(
        <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] p-4">
        <Link className="my-4 inline-block" to="/jobs">
                <Button leftSection={<IconChevronsLeft size={20}/>} color="blue.4" variant="light">back</Button>
            </Link>
            <ApplyJobComp/>
        </div>
    ) 
}
export default ApplyJobPage;