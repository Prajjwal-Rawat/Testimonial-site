import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Cards({Review}){
    return(
        <div className="flex flex-col relative md:relative">
            <div className="absolute md:top-[-7rem] top-[-5rem] z-[10] mx-auto">
            <img src = {Review.image} className="aspect-square rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] z-[25]" />
            <div className="aspect-square rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-slate-700 top-[-6px] z-[-20] absolute"></div>
            </div>

            <div className="text-center mt-7">
                <h2 className="tracking-wider text-2xl font-bold capitalize">{Review.name}</h2>
                <p className="text-violet-400 uppercase text-sm">{Review.job}</p>
            </div>

            <div className="text-violet-500 mx-auto m-4">
               <RiDoubleQuotesL fontSize={'30px'}/>
            </div>

            <div className="text-center text-slate-600">
                <p>{Review.text}</p>
            </div>

            <div className="text-violet-500 mx-auto m-4">
            <RiDoubleQuotesR fontSize={'30px'} />
            </div>
        </div>
    )
}

export default Cards;