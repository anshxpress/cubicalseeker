import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
    const links=[
        {name:"Find Jobs",url:"find-jobs"},
        {name:"Find Preference",url:"find-preference"},
        {name:"Upload Jobs",url:"upload-jobs"},
        {name:"About US",url:"about"},
    ]
    const location  = useLocation();
    return <div className="flex gap-8 text-mine-shaft 200 h-full items-center">
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