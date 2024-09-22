import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import { useState } from "react";
import { IconCoinRupeeFilled } from "@tabler/icons-react";
import Multiinput from "../FindJobs/Multiinput";
import Searchbar from "../FindJobs/Searchbar";
import { searchFields } from "../Data/TalentData";

const SearchBar=()=>{
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return <div className="flex px-5 py-8 ">
        {
            searchFields.map((item,index)=><><div key={index} className="w-1/5">
                <Multiinput {...item} />
            </div><Divider mr="xs" size="sm" orientation="vertical" /></>)
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex text-xs justify-between">
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA-&#8377;{value[1]} LPA</div>
            </div>
        <RangeSlider color="blue.4" size="xs" value={value} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }} onChange={setValue} />
        </div>    
    </div>

}
export default Searchbar;