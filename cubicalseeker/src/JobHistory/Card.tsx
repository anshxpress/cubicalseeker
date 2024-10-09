
import { IconBookmarkPlus, IconCalendarClock, IconCalendarMonth } from "@tabler/icons-react";
import { Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";
const Card=(props:any) =>{
    return <Link  to="/jobs" className="bg-mine-shaft-900 p-3 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-sky-400">
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
            {props.saved?<IconBookmarkPlus className="text-blue-500 cursor-pointer"/>:<IconBookmarkPlus className="text-mine-shaft-300 cursor-pointer"/>}
        </div>
    <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800
     [&>div]:text-sky-400 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
    </div>
    <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.description}</Text>
<Divider size="xs" color="blue.7"/>
    <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.package}  
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconCalendarClock className="h-5 w-5" stroke={1.5}/> {props.applied || props.interview?"Applied":props.offered?"Interviewed":"Posted"} {props.postedDaysAgo} days ago
        </div>
    </div>
    {(props.offered || props.interview) && <Divider size="xs" color="blue.7"/>}
    {
      props.offered&& <div className="flex gap-2">
             <Button color="blue.4" variant="outline" fullWidth>accept</Button>
             <Button color="blue.4" variant="light" fullWidth>reject</Button>
        </div>
    }
    {
       props.interview && <div className="flex gap-1 text-sm items-center">
        <IconCalendarMonth className="text-sky-500 w-5 h-5" stroke={1.5}/> Sun, 07 October &bull; <span className="text-mine-shaft-400">10:00 AM</span>
        </div>
    }
    </Link>
}
export default Card;