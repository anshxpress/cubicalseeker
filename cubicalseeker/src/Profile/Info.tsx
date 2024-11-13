import { ActionIcon } from "@mantine/core";
import {
  IconFilePlus,
  IconEdit,
  IconBriefcase,
  IconMapPins,
} from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successMessage } from "../SignupLogin/NotificationService";

const Info = () => {
  const select = fields;
  const dispatch = useDispatch();
  const user= useSelector((state:any)=>state.user);
  const profile = useSelector((state:any)=>state.profile);
  const [edit, setEdit] = useState(false);
  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({jobTitle: profile.jobTitle, company: profile.company, location: profile.location});  

    } else {
      setEdit(false);
      let updatedProfile={...profile, ...form.getValues()};
      dispatch(changeProfile(updatedProfile));
      console.log(updatedProfile);
      successMessage("success", "Profile updated successfully.")
    }
  };
  const form = useForm({
    mode: "controlled",
    initialValues: { jobTitle: "", company: "", location: "" },
  });
  return (
    <>
      <div className="px-3 mt-16 py-3">
        <div className="text-3xl font-semibold flex justify-between">
          {user.name}
          <ActionIcon
            color="blue.5"
            onClick={handleClick}
            variant="subtle"
            aria-label="Settings"
          >
            {edit ? (
              <IconFilePlus
                className="h-4/5 w-4/5"
              />
            ) : (
              <IconEdit
                className="w-4 h-4/5"
                stroke={1.5}
              />
            )}
          </ActionIcon>{" "}
        </div>
        {edit && (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput form={form}name="jobTitle" {...select[0]} />
              <SelectInput form={form}name="company" {...select[1]} />
            </div>
            <SelectInput form={form}name="location" {...select[2]} />
          </>
        )}
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile.jobTitle}
          &bull; {profile.company}
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPins className="h-5 w-5" stroke={1.5} /> {profile.location}
        </div>
      </div>
    </>
  );
};
export default Info;
