import { rem, PasswordInput, Button, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UserService";
import { useState } from "react";
import { loginValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
    email: "",
    password: "",
}

const Login = () => {
    const [data, setData] = useState(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setFormError({...formError,[event.target.name]:""});
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        let valid = true;
        let newFormError: { [key in keyof typeof form]: string } = { email: "", password: "" };

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                newFormError[key as keyof typeof data] = loginValidation(key, data[key as keyof typeof data]);
                if (newFormError[key as keyof typeof data]) valid = false;
            }
        }

        setFormError(newFormError);
        if (valid) {
            loginUser(data)
                .then((res) => {
                    console.log(res);
                    notifications.show({
                        title: 'login Successfully',
                        message: 'Redirecting to dashboard page.',
                        withCloseButton:true,
                        icon:<IconCheck style={{width:"90%",height:"90%"}}/>, color:"blue",
                        withBorder:true,
                        className:"!border-sky-500",
                      });
                    setTimeout(() => {
                        navigate("/homepage");
                    }, 2000);
                })
                .catch((err) => {
                    console.log(err);
                    notifications.show({
                        title: 'Login failed',
                        message: err.response.data.errorMessage,
                        withCloseButton: true,
                        icon: <IconX style={{ width: "90%", height: "90%" }} />,
                        color: "red",
                        withBorder: true,
                        className: "!border-red-500",
                    });
                });
        }
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">User account</div>
            <TextInput
                value={data.email}
                error={formError.email}
                name="email"
                onChange={handleChange}
                withAsterisk
                leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                label="E-mail"
                placeholder="Your email"
            />
            <PasswordInput
                value={data.password}
                error={formError.password}
                name="password"
                onChange={handleChange}
                withAsterisk
                leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                label="Password"
                placeholder="Enter password"
            />
            <Button onClick={handleSubmit} autoContrast color="blue.5" variant="light">
                Log In
            </Button>
            <div className="mx-auto">
                Don't have an account? <span className="text-sky-400 hover:underline cursor-pointer"  onClick={()=>{navigate("/signup"); setFormError(form); setData(form)}}>Sign up</span>
            </div>
        </div>
    );
}

export default Login;
