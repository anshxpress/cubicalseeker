import Header from "../header/Header";
import Companies from "../LandingPage/Companies";
import Dreamjob from "../LandingPage/Dreamjob";
import JobCategory from "../LandingPage/JobCategory";
import Working from "../LandingPage/Working";
const HomePage=()=>{
    return(
        <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
            <Header/>
            <Dreamjob/>
            <Companies/>
            <JobCategory/>
            <Working/>
        </div>
    )   
}
export default HomePage;