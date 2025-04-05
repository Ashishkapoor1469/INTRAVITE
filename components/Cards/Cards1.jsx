import Card from "@/components/Cards/cardss/Card"
import Data from "@/Data/CardData"
export default function card1(){
    return <>
    <div className="flex w-full sm:p-0 p-5 md:w-9/12 flex-wrap justify-center items-center gap-5">
    {Data.map((Data,index)=>{
        return <div key={index}><Card dis1={Data.dis} head={Data.head} comment={Data.comment} time={Data.time} student={Data.student}/></div>
    })}
    </div>
    </>
}