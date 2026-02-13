"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Header = (props)=>{
    const router = useRouter()
    return(
        <div className="px-8 min-h-20 bg-primary flex justify-between items-center">
           <h1 className="text-2xl font-bold text-white">
               𝕱𝖆𝖙𝖊𝖊𝖓-𝖆𝖕𝖕
           </h1>
           <Button onClick={()=>router.push(props.to)}>
                {props.cta}
           </Button>
        </div>
    )
}


export default Header;




 