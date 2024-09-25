import { Divider } from "@mantine/core";
import Searchbar from "../FindJobs/Searchbar";
import SearchBar from "../FindPrefrence/Searhbar";
import Talents from "../FindPrefrence/Talents";
const FindTalentPage=()=>{
    return(
        <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
            <Divider mr="xs" mx="md"/>
            <SearchBar/> 
            <Divider mr="xs" mx="md"/>
            <Talents/>  
        </div>
    )
}
export default FindTalentPage;