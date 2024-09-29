import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { IconChevronsLeft } from "@tabler/icons-react";

const PostJob=()=>{
    const select=fields;
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">Post a Job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[2]}/>
                <SelectInput {...select[3]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[4]}/>
                <SelectInput {...select[5]}/>
            </div>
            <TagsInput withAsterisk label="Skills" placeholder="Enter Skills" clearable acceptValueOnBlur splitChars={[',',' ','|']}/>
            <div className="[&_button[data-active='true']]:!text-blue-400 [&_button[data-active='true']]:!bg-sky-400/20">
                <div className="text-sm font-medium">Job Description</div>
                <TextEditor/>
            </div>
            <div className="flex gap-4">
            <Button  color="blue.4" variant="light">Publish Job</Button>
            <Button  color="blue.4" variant="outline">Save as Draft</Button>
            </div>
        </div>
    </div>
}
export default PostJob;