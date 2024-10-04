const ApplyJobComp=()=>{
    return <div>
        <div className="flex justify-between">
            <div className="flex gap-2 items-justify">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">
                        Data scientist
                    </div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago
                        &#183; 50 Applicants</div>
                </div>
            </div>           
        </div>
    </div>
        
}
export default ApplyJobComp;