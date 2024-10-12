import { rem, PasswordInput, Checkbox, Anchor, Button, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login=()=>{
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
    <div className="text-2xl font-semibold">User account</div>
    <TextInput withAsterisk label="Full Name" placeholder="Your Name"/>
    <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }}/>}
    label="E-mail" placeholder="Your email"/>
    <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Enter password" />
    <Button autoContrast color="blue.5" variant="light">Login In</Button>
    <div className="mx-auto"> Don't Have an account? <Link className="text-sky-400 hover:underline" to="/login">Signup</Link></div>
</div>   
}
export default Login;
