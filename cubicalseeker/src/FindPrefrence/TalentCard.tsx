import { IconMapPins, IconUserHeart } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";


const TalentCard=(props:any) =>{
    return <div  className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-sky-400">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                    <Avatar className="h-7" size="lg"src={`/${props.image}.png`} alt="-ml-2"/>
                </div>
                <div>
                    <div className="font-semibold size=lg">
                        {props.name}
                    </div>
                    <div className="text-xs text-mine-shaft-300">{props.role}
                        &#183; {props.company}</div>
                </div>
            </div>
            <IconUserHeart className="text-mine-shaft-300 cursor-pointer"/>
        </div>
    <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800
     [&>div]:text-sky-400 [&>div]:rounded-lg text-xs">
                {
                    props.topSkills?.map((skill: any,index: any)=><div key={index} className="p-2 py1 bg-mine-shaft-800 text-sky-400 rounded-lg text-xs">{skill}</div>)
                }
    </div>
    <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.about}</Text>
<Divider size="xs" color="blue.7"/>
    <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          {props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconMapPins className="h-5 w-5" stroke={1.5}/> {props.location}
        </div>
    </div>
    <Divider size="xs" color="blue.7"/>
        <div className="flex [&>*]:w-1/3 [&>*]:p-1">
            <Link to="/talent-profile">
                <Button  variant="outline">Profile</Button>
            </Link>
        <div className="flex [&>*]:p-1">
            <Button variant="light">Message</Button>
        </div>
    </div>
    </div>
}
export default TalentCard;