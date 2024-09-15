import { Avatar, Indicator,NavLink} from "@mantine/core";
import { IconBellPlus, IconSettingsCode, IconZoomCodeFilled } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between
    items-center font-['poppins']">
        <div className="flex gap-1 items-center text-sapphire-400">
            <IconZoomCodeFilled className="h-8 w-8"stroke={1.25} />
            <div className="text-3xl font-semibold">Cubical Seeker</div>
        </div>
        {
        NavLinks()
        }
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