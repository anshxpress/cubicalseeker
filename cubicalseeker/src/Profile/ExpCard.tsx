import { Button } from "@mantine/core";
import { IconCalendarTime } from "@tabler/icons-react";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../Services/Utilities";

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold"> {props.title} </div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#183; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm mine-shaft-200 justify-center">
          <div className="flex justify-center">
            <IconCalendarTime />
            {formatDate(props.startDate)} - {formatDate(props.endDate)}
          </div>
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify ">
        {props.description}
      </div>
      {props.edit && (
        <div className="flex gap-5">
          <Button onClick={() => setEdit(true)} color="blue.5" variant="light">
            Edit
          </Button>
          <Button color="red.8" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput setEdit={setEdit} />
  );
};
export default ExpCard;
