import Image from "next/image";
import {Button, buttonVariants} from "@/components/ui/button";

const prepare = () => {
    console.log("Готовить")
}

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Button variant={"outline"}>Корзинка</Button>
        </>
    )
        ;
}
