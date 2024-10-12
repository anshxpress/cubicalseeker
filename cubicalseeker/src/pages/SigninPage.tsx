import { IconZoomCodeFilled } from "@tabler/icons-react";
import Signup from "../SignupLogin/Signup";
import Login from "../SignupLogin/Login";
import { useLocation } from "react-router-dom";

const SigninPage=()=>{
    const location=useLocation()
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-200 flex [&>*]:flex-shrink-0 ${window.location.pathname =='/login' ? '-translate-x-1/2' :'translate-x-0'}`}>
                <Login/>
                <div className={`w-1/2 h-full transition-all duration-200 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex items-center gap-4 justify-center flex-col`}>
                <div className="flex gap-1 items-center text-sapphire-400">
            <IconZoomCodeFilled className="h-16 w-16"stroke={2.5} />
            <div className="text-6xl font-semibold">Cubical Seeker</div>
            </div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
            
        </div>
        <Signup/>
    </div>
</div>
    ) 
}
export default SigninPage;