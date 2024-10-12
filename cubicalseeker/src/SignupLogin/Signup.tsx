import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Signup=()=>{
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create account</div>
        <TextInput withAsterisk label="Full Name" placeholder="Your Name"/>
        <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }}/>}
        label="E-mail" placeholder="Your email"/>
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Enter password" />
        <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Enter password" />
        <Checkbox autoContrast label = {<>I accept {' '} <Anchor className="text-sky-500"> terms & condititons </Anchor> </>}/>
        <Button autoContrast color="blue.5" variant="light">Sign Up</Button>
        <div className="mx-auto"> Have an account? <Link className="text-sky-400 hover:underline" to="/signup">Login</Link></div>
    </div>
}
export default Signup;