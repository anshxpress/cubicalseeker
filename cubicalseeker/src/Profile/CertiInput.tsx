import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput=(props:any)=>{  
    const [issueDate, setissueDate] = useState <Date | null> (new Date());
    const select = fields;
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter Title"/>
        <SelectInput {...select[1]}/>
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput withAsterisk maxDate={new Date()}
            label ="start date" placeholder="select date" value={issueDate} onChange={setissueDate} />
            <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID:"/>
        </div>
        <div className="flex gap-5">
            <Button onClick={()=>props.setEdit(false)} color="blue.5" variant="light">Save</Button> 
            <Button color="red.8" onClick={()=>props.setEdit(false)} variant="light">Cancel</Button>
        </div>
    </div>
}
export default CertiInput;