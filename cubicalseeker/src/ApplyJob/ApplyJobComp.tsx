import { Button, Divider, FileInput, NumberInput, Textarea, TextInput, Notification, rem, LoadingOverlay} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preProcessFile } from "typescript";

const ApplyJobComp=()=>{
    const [Preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate= useNavigate();
    const handlePreview =()=>{
        setPreview(!Preview);
        window.scrollTo({top:0, behavior: "smooth"})
    }
    const handleSubmit =()=> {
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)navigate('/find-jobs');
        },1000)

    }
    return <> <div className="w-2/3 mx-auto">
        <LoadingOverlay className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'blue.4', type: 'bars' }}
        />
        <div className="w-2/3 mx-auto">
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
                <Divider my="xl" color="blue.7"/>  
                <div className="text-xl font-semibold gap-5">Submit Your Application</div>  
                <div className="flex flex-col gap-5"> 
                    <TextInput readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":"default"}`} label="Full Name" withAsterisk placeholder="Enter Name"/>
                    </div>
                    <div className="flex py-5 gap-10 [&>*]:w-1/2">
                    <TextInput readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":"default"}`} label="E-mail" withAsterisk placeholder="Enter E-mail"/>
                    <NumberInput readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":"default"}`} label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls clampBehavior="strict" min={0} max={9999999999}/>
                    <TextInput readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":"default"}`}  label="Personal Website" withAsterisk placeholder="Enter http//:@url"/>
                </div>
                <div className="flex flex-col gap-5">
                <FileInput readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":"default"}`} withAsterisk leftSection={<IconPaperclip/>} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none"/>
                <Textarea readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":"default"}`} withAsterisk placeholder="Answer...." label="Why Should you be hired for this role?" autosize minRows={4}/>
                {!Preview &&<Button onClick={handlePreview} color="blue.4" variant="light">Preview</Button>}
                {
                    Preview && <div className="flex gap-10 [&>*]:w-1/2">
                        <Button fullWidth onClick={handlePreview} color="blue.4" variant="outline">Edit</Button>
                        <Button fullWidth onClick={handleSubmit} color="blue.4" variant="light">Submit</Button>
                    </div>
                }
                </div>
         </div>
    </div>
        <Notification className={`!border-sky-400 !fixed top-0 left-[40%] z-[1001] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"}`} icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} color="blue.4" title="Application Submitted" mt="md" withCloseButton={false}>
            Apply for more jobs in next {sec} sec...
        </Notification>
    </>      
}
export default ApplyJobComp;