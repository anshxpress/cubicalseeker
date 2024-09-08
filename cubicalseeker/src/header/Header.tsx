import { Avatar, Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconBellPlus, IconSettingsCode, IconZoomCodeFilled } from "@tabler/icons-react";

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between
    items-center">
        <div className="flex gap-1 items-center text-sapphire-400">
            <IconZoomCodeFilled className="h-8 w-8"stroke={1.25} />
            <div className="text-3xl font-semibold">cubicalseeker</div>
        </div>
        <div className="flex gap-5">
            <a href="">Find Job</a>
            <a href="">Find Prefrence</a>
            <a href="">Upload Job</a>
            <a href="">About US</a>
        </div>
        <div className="flex gap-3 item-center"> 
            
            <div className="flex items-center gap-2">
                <div>Admin</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className=" bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettingsCode stroke={1.5} />
            </div>
            <div className=" bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator inline processing color="blue" offset={4} size={12}>
                <IconBellPlus stroke={1.5}/>
            </Indicator>
            </div>
         </div>
    </div>

}
export default Header;