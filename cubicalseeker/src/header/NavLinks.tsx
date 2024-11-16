import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
    const links=[
        {name:"Find Jobs",url:"find-jobs"},
        {name:"Find Talent",url:"find-Talent"},
        {name:"Post Jobs",url:"post-jobs"},
        {name:"Posted Job",url:"posted-job"},
        {name:"Job History", url:"job-history"},
    ]
    const location  = useLocation();
    return <div className="flex gap-8 text-mine-shaft 200 h-full items-center py-3">
        {   
        links.map((link,index)=><div className=
        {`${location.pathname=="/"+link.url?"border-sky-600 text-sky-600" : "border-transparent"}
         border-t 3px h-full items-center`}>
            <Link key={index} to={link.url} > {link.name}</Link>
        </div>) 
        }
        </div>
}
export default NavLinks;