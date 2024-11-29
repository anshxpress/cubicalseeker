import { Carousel} from "@mantine/carousel"
import { jobCategorylist } from "../Data/Data"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

const JobCategory=()=>{
    return  <div className="mt-20 pb-5">
    
    <div className="text-4xl text-center font font-semibold mb-3 text-mine-shaft-100">Browse 
        <span className="text-sky-400"> Job</span> Category</div>
    
    <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2"> 
    Explore diverse job oppertuniities tailored to your skills. start your carrier here!!</div>
    
    <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none [&_button]:!bg-sky-blue-400" 
    nextControlIcon={<IconArrowRight className="h-8 w-8" />}
    previousControlIcon={<IconArrowLeft className="h-8 w-8"/>}>
        {
        jobCategorylist.map((category: any, index: any)=><Carousel.Slide>
        <div className="flex flex-col items-center w-64 gap-2 border border-sky-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-sky-400">
            <div className="p-2 bg-sky-300 rounded-full">
                <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name}/>
            </div>
            <div className="text-mine-shaft-100 text-xl font-semibold">
            {category.name}
            </div>
            <div className="text-sm text-center text-mine-shaft-300">
            {category.desc}
            </div>
            <div className="text-sky-300 text-lg">{category.jobs}+ New Job Posted</div>
        </div>
        </Carousel.Slide>)
        }
    </Carousel>
 </div>

}
export default JobCategory