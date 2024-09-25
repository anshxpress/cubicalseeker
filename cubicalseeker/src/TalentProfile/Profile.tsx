import { IconMapPins } from "@tabler/icons-react";

const Profile=()=>{
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3
             border-mine-shaft-950 border-5 " src="/avatar.png" alt="" />
           </div>
            <div className="px-3 mt-16">
                <div>Aniket Kumar Panday</div>
                <div>Software Engineer &bull; Google</div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconMapPins className="h-5 w-5" stroke={1.5}/> Mumbai,India
            </div>
         </div>
    </div>

}
export default Profile;