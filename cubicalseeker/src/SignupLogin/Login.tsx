import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UserService";
import { signupValidation } from "../Services/FormValidation";
import { escape } from "querystring";
import { notifications } from "@mantine/notifications";
const form={
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
    accountType: "APPLICANT",
}

const Signup=(props:any)=>{
    const [data, setData] = useState<{[key:string]:string}> (form);

    const[formError, setFormError] = useState<{[key:string]:string}> (form);

    const navigate = useNavigate();

    const handleChange=(event:any)=>{
        if(typeof(event)=="string"){
            setData({...data,accountType:event});
            return;
        }
        let name=event.target.name, value=event.target.value;
        setData({...data,[name]:event.target.value});
        setFormError({...formError, [name]:signupValidation(name,value)})
      
        if(name==="password" && data.confirmPassword!=="")
            {     
               let err="";
               if(data.password!==value) err =  "password not match.";
                else setFormError({...formError,confirmPassword:""});
                setFormError({...formError, [name]:signupValidation(name,value), confirmPassword:err})
            }
        if(name==="confirmPassword") 
        {
            if(data.password!==value)setFormError({...formError,[name]:"password not match."})
                else setFormError({...formError, confirmPassword:""})
        }
    }
    const handleSubmit=()=>{
        let valid=true, newFormError:{[key:string]:string}={};
        for(let key in data){
            if(key==="accountType")continue; 
            if(key!=="confirmPassword") newFormError[key]=signupValidation(key, data[key]);
            else if(data[key]!== data["password"])newFormError[key]="passwords do not match."
            if(newFormError[key])valid=false;
        }
        setFormError(newFormError);
              if(valid===true){
        registerUser(data).then((res)=>{
            console.log(res);
            setData(form);
            notifications.show({
                title: 'Register Successfully',
                message: 'Redirecting to login page.',
                withCloseButton:true,
                icon:<IconCheck style={{width:"90%",height:"90%"}}/>, color:"blue",
                withBorder:true,
                className:"!border-sky-500",
              })
              setTimeout(()=>{
                navigate("/login");
              },2000)
        }).catch((err)=>
            {
                notifications.show({
                    title: 'Registration fail',
                    message: err.response.data.errorMessage,
                    withCloseButton:true,
                    icon:<IconX style={{width:"90%",height:"90%"}}/>, color:"red",
                    withBorder:true,
                    className:"!border-red-500",
                  })
            });
       }
    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create account</div>
        <TextInput value={data.name} error={formError.name} name="name" onChange={handleChange} label="Full Name" withAsterisk  placeholder="Your Name"/>
        <TextInput value={data.email} error={formError.email}name="email" onChange={handleChange} withAsterisk  leftSection={<IconAt style={{ width: rem(16), height: rem(16) }}/>}
          label="E-mail" placeholder="Your email"/>
        <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Enter password" />
        <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Enter password" />
        <Radio.Group value={data.accountType} onChange={handleChange}  name="You Are?" withAsterisk>
          <Group mt="xs">
            <Radio className="py-4 px-6 border has-[:checked]:bg-blue-400/5 has-[:checked]:border-sky-400 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
            <Radio className="py-4 px-6 border has-[:checked]:bg-blue-400/5 has-[:checked]:border-sky-400 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />
          </Group>
        </Radio.Group>
        <Checkbox autoContrast label = {<>I accept {' '} <Anchor className="text-sky-500"> terms & condititons </Anchor> </>}/>
        <Button onClick={handleSubmit} autoContrast color="blue.5" variant="light">Sign Up</Button>
        <div className="mx-auto"> Have an account? <span className="text-sky-400 hover:underline cursor-pointer" onClick={()=>{navigate("/login"); setFormError(form); setData(form)}}>Login</span></div>
    </div>
}
export default Signup;