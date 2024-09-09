import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import exp from "constants"

const Dreamjob = () => {
return(
    <div className="flex items-center px-16">
        <div className="flex flex-col w-[45%] gap-3">
            <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-sky-600">
                Find your <span> dream </span> <span> job </span> with us</div>
            <div className="text-lg text-mine-shaft-200">
                Good life begins with good workspace. Starts explores thousands of jobs in one place.
            </div>
            <div className="flex gap-3 mt-5">
            <TextInput className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 " variant="unstyled" label="Job Title" placeholder="Software Engineer"
            /> 

            <TextInput className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 " variant="unstyled" label="Job Type" placeholder="Full Time"
            />
            <div className="flex items-center justify-center h-full w-20 bg-sky-300 text-mine-shaft-900 rounded-lg p-2 hover:bg-sky-500 cursor-pointer">
                <IconSearch className="h-[45%] w-[45%]"/>
            </div>
            </div>
        </div>
        <div className="w-[55%] flex  items-center justify-center">
            <div className="w-[30rem]">  
                <img src="/Boy.png" alt="boy" />
                <div className="w-fit">
                <div className="text-center mb-1 text-sm text-mine-shaft-100">5k+ got Job</div>
                <Avatar.Group>
                     <Avatar src="avatar.png" />
                     <Avatar src="avatar1.png" />
                     <Avatar src="avatar2.png" />
                      <Avatar>+5K</Avatar>
                 </Avatar.Group>
                </div>
            </div>
        </div>
    </div>
)
}
export default Dreamjob;