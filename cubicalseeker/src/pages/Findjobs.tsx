import { Divider } from "@mantine/core";
import Searchbar from "../FindJobs/Searchbar";
import Jobs from "../FindJobs/Jobs";

const Findjobs=()=>{
    return(
        <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
            <Divider mr="xs" mx="md"/>
            <Searchbar/>
            <Jobs/>
            <div></div>
            
        </div>
    )
}
export default Findjobs;
