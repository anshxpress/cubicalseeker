import { Button, TextInput } from "@mantine/core";

const Newmembers =() => {
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-evenly">
        <div className="text-4xl w-2/5 text-center font font-semibold text-mine-shaft-100"> Never wants to 
        miss any.... <span className="text-sky-400"> Job news</span></div>
        <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
        <TextInput
        className="[&_input]: text-mine-shaft-100 font-semibold"
        variant="unstyled"
        placeholder="your@email.com"
        size="xl"
        />
        <Button className="!rounded-lg" size="ls" bg={"Skyblue.4"} variant="filled">Apply</Button>
        </div>
    </div>
}
export default Newmembers;