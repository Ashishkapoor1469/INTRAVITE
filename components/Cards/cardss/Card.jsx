import IMg from "@/image/l.webp"
import Image from "next/image"
import { IoIosTimer } from "react-icons/io";
export default function card1(props){
    return <div className="card h-auto w-auto sm:w-86 shadow-2xl bg-white hover:shadow-neutral-700 hover:translate-y-3 duration-300 transition-all">
<div className="absolute flex items-center justify-end w-full h-full"><div className="pr sm:h-15 sm:w-15 w-10 h-10 text-[10px]  mask mask-decagon flex justify-center items-center sm:text-sm  text-white bg-blue-600">1500Rs</div></div>
<div className="logo h-full w-full">
<Image className="w-full h-46" src={IMg} width={500} height={500} alt="img"/>
</div>
<div className="cont h-full w-full text-black p-8">
<p className="flex items-center gap-0.5"><IoIosTimer/>{props.time}</p>
<h1 className="text-[#7971EA]">{props.head}</h1>
<p className="text-sm">{props.dis1}</p>
<div className="h-full w-full flex text-sm  text-neutral-700 font-semibold items-end justify-between p-3">
<p>Students⩴{props.student}</p>
<p>🗨️{props.comment}</p>
</div>
</div>
    </div>
}