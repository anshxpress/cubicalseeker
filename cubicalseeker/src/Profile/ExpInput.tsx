import { Anchor, Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput=(props:any)=>{
    const select = fields;
    const [startDate, setstartDate] = useState <Date | null> (new Date());  
    const [endDate, setendDate] = useState <Date | null> (new Date())
    const [checked, setChecked] = useState(false); 
    const [desc,setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency.My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.");
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
             <SelectInput {...select[0]}/>
             <SelectInput {...select[1]}/>
         </div> 
             <SelectInput {...select[2]}/>
             <Textarea withAsterisk label="summary" value={desc} placeholder="Enter your experience" autosize minRows={3} onChange={(event) => setDesc(event.currentTarget.value)}/>
             <div className="flex flex-col gap-3">
                <MonthPickerInput withAsterisk maxDate={endDate || undefined}
                label ="start date"
                placeholder="select date"
                value={startDate}
                onChange={setstartDate}
                />
                <MonthPickerInput disabled={checked} withAsterisk minDate={startDate || undefined}
                label ="end date"
                placeholder="select date"
                value={endDate}
                onChange={setendDate}
                />
             </div>
             <Checkbox  checked={checked}
                 onChange={(event) => setChecked(event.currentTarget.checked)} autoContrast color="blue.5" label="Currenty working here"/>
                <div className="flex gap-5">
                    <Button onClick={()=>props.setEdit(false)} color="blue.5" variant="light">Save</Button> 
                    <Button color="red.8" onClick={()=>props.setEdit(false)} variant="light">Cancel</Button>
                </div>
    </div>
}
export default ExpInput;