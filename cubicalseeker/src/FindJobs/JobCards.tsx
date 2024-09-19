
import { IconBookmarkPlus, IconCalendarClock } from "@tabler/icons-react";
import { Divider, Text } from '@mantine/core';
import { ClassNames } from "@emotion/react";


const JobCards=(props:any) =>{
    return <div  className="bg-mine-shaft-900 p-3 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-sky-400">
        <div className="flex justify-evenly">
            <div className="flex gap-2 items-justify">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">
                        {props.jobTitle}
                    </div>
                    <div className="text-xs text-mine-shaft-300">{props.company}
                        &#183; {props.applicants}</div>
                </div>
            </div>
            <IconBookmarkPlus className="text-mine-shaft-300 cursor-pointer"/>
        </div>
    <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800
     [&>div]:text-sky-400 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
    </div>
    <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.description}</Text>
<Divider size="xs" color="mineShaft.7"/>
    <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.package}  
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconCalendarClock className="h-5 w-5" stroke={1.5}/> {props.postedDaysAgo} days ago
        </div>
    </div>
    </div>
}
export default JobCards;