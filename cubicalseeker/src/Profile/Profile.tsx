import {
  IconBriefcase,
  IconEdit,
  IconFilePlus,
  IconMapPins,
  IconScriptPlus,
} from "@tabler/icons-react";
import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { getProfile } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { setProfile } from "../Slices/ProfileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [skills, setSkills] = useState([
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ]);
  const [edit, setEdit] = useState([false, false, false, false]);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);

  useEffect(() => {
    console.log(profile);
    getProfile(user.id)
      .then((data: any) => {
        dispatch(setProfile(data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const [about, setAbout] = useState(
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate  about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively."
  );
  
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  console.log(profile)
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="/profile/banner.jpg" alt="" />
        <img
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3
             border-mine-shaft-950 border-5 "
          src="/avatar.png"
          alt=""
        />
      </div>
      <Info />
      <Divider ms="xs" size="xs" my="xl" color="blue.7" />
      <div className="px-3">
        <div className="text-3xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon color="blue.5" variant="subtle" aria-label="Settings">
            {" "}
            {edit[1] ? (
              <IconFilePlus className="h-4/5 w-4/5" />
            ) : (
              <IconEdit
                onClick={() => handleEdit(1)}
                size="lg"
                className="h-4/5 w-4/5"
              />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            value={about}
            placeholder="Enter about yourself"
            autosize
            minRows={3}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {profile.about || about} 
          </div>
        )}
      </div>
      <Divider ms="xs" size="xs" my="xl" color="blue.7" />
      <div className="px-3">
        <div className="text-3xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon color="blue.5" variant="subtle" aria-label="Settings">
            {" "}
            {edit[2] ? (
              <IconFilePlus className="h-4/5 w-4/5" />
            ) : (
              <IconEdit
                onClick={() => handleEdit(2)}
                size="lg"
                className="h-4/5 w-4/5"
              />
            )}
          </ActionIcon>{" "}
        </div>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add skills"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {(profile.skills || skills || []).map((skill: any, index: number) => (
              <div
                key={index}
                className="bg-sky-300 font-medium bg-opacity-15 rounded-3xl text-sky-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider ms="xs" size="xs" my="xl" color="blue.7" />
      <div className="px-3">
        <div className="text-3xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="felx gap-2">
            {" "}
            <ActionIcon
              onClick={() => setAddExp(true)}
              color="blue.5"
              variant="subtle"
            >
              <IconScriptPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon color="blue.5" variant="subtle" aria-label="Settings">
              {" "}
              {edit[3] ? (
                <IconFilePlus className="h-4/5 w-4/5" />
              ) : (
                <IconEdit
                  onClick={() => handleEdit(3)}
                  size="lg"
                  className="h-4/5 w-4/5"
                />
              )}
            </ActionIcon>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {(profile?.experiences || []).map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput setEdit={setAddExp} />}
        </div>
      </div>
      <Divider ms="xs" size="xs" my="xl" color="blue.7" />
      <div className="px-3">
        <div className="text-3xl font-semibold mb-5 flex justify-between">
          Certification{" "}
          <div className="felx gap-2">
            {" "}
            <ActionIcon
              onClick={() => setAddCerti(true)}
              color="blue.5"
              variant="subtle"
            >
              <IconScriptPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon color="blue.5" variant="subtle" aria-label="Settings">
              {" "}
              {edit[4] ? (
                <IconFilePlus className="h-4/5 w-4/5" />
              ) : (
                <IconEdit
                  onClick={() => handleEdit(4)}
                  size="lg"
                  className="h-4/5 w-4/5"
                />
              )}
            </ActionIcon>{" "}
          </div>{" "}
        </div>
        <div className="flex flex-col gap-8">
          {(profile?.certifications || []).map((certi: any, index: any) => (
            <CertiCard key={index} edit={edit[4]} {...certi} />
          ))}
          {addCerti && <CertiInput setEdit={setAddCerti} />}
        </div>
      </div>
    </div>
  );
};
export default Profile;
