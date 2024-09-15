import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandMeta, IconBrandX, IconZoomCodeFilled } from "@tabler/icons-react";
import exp from "constants"
import { footerLinks } from "../Data/Data";
import { link } from "fs";

const Footer=()=>{
    return <div className="pd-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
        <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-sapphire-400">
            <IconZoomCodeFilled className="h-6 w-6"stroke={1.25} />
            <div className="text-xl font-semibold mb-4">Cubical Seeker</div>
        </div>
          <div className="text-sm text-mine-shaft-100">
            Job portal with user Profiles, skills updates, certifications, work experiences and admin job postings.
          </div>
          <div className="flex gap-3 text-sky-400 [&>div]:bg-mine-shaft-900 [&>div]: p-2
          [&>div]:rounded [&>]:cursor-pointer hover:[&>div]:bg-mine-shaft-600">
          <div><IconBrandFacebook/></div>
          <div><IconBrandInstagram/></div>
          <div><IconBrandLinkedin/></div>
          <div><IconBrandX/></div>
          </div>
        </div>
        {
            footerLinks.map((item, index) => <div key={index}>
                <div className="text-lg font-semibold mb-4 text-sky-400">{item.title}</div>
                {
                    item.links.map((link,index) => <div key={index} className="text-mine-shaft-300 text-sm
                     hover:text-sky-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">{link}</div>)
                }
            </div>)
        }
    </div>
}
export default Footer;