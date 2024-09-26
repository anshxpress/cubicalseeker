import { IconCalendarTime } from "@tabler/icons-react";

const ExpCard=()=>{
    return <div className="flex flex-col gap-2">
     <div className="flex justify-between">
     <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/Google.png`} alt="" />
        </div>
        <div className="flex flex-col gap-1">
            <div className="font-semibold"> role </div>
            <div className="text-sm text-mine-shaft-300">company &#183; Location</div>
        </div>
    </div>
         <div className="text-sm mine-shaft-200 justify-center">
             <div className="flex justify-center"><IconCalendarTime/>  Jan 2020 - Present</div>
         </div>
    </div>
    <div className="text-sm text-mine-shaft-300 text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eum fugiat harum accusantium deserunt qui velit eveniet provident nisi fuga vitae quis sed, perspiciatis similique voluptatem. Eligendi voluptate dolores accusantium aperiam saepe nemo?
    </div>
</div>
}
export default ExpCard;