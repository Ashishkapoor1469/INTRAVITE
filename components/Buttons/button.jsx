import { motion } from "motion/react"
export default function button(props){
    return(
        <motion.div initial={props.in} animate={props.ani} transition={props.tra} className="px-4.5 py-2.5 w-fit text-[15px] flex justify-center items-center duration-500 font-bold text-white   btn btn-info">
    {props.dis}
  </motion.div>
    )
} 