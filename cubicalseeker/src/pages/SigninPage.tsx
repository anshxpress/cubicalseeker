import { IconZoomCodeFilled } from "@tabler/icons-react";

const SigninPage=()=>{
    return(
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
            <div className="w-[100vw] h-[100vh]">
                <div className="w-1/2 h-full rounded-r-[200] bg-mine-shaft-900 flex items-center justify-center flex-col">
                <div className="flex gap-1 items-center text-sapphire-400">
            <IconZoomCodeFilled className="h-16 w-16"stroke={2.5} />
            <div className="text-6xl font-semibold">Cubical Seeker</div>
            </div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
        </div>
    </div>
</div>
    ) 
}
export default SigninPage;