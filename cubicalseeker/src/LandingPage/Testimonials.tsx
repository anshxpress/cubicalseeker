import { Avatar, Rating } from "@mantine/core";

const Testimonial=()=>{
    return <div className="mt-20 pb-5">
    
    <div className="text-4xl text-center font font-semibold mb-3 text-mine-shaft-100"> What 
        <span className="text-sky-400"> Users</span> says about us!?</div>
        <div>
            <div className="flex gap-2 items-center">
                <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
                <div>
                    <div>Kshitij</div>
                    <Rating value={3.8} fractions={2} readOnly />
                </div>
            </div>
        </div>

    </div>
}
export default Testimonial;