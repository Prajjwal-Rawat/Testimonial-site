import { useState } from "react";
import Cards from "./Cards";
import { HiMiniChevronDoubleRight, HiMiniChevronDoubleLeft } from "react-icons/hi2";



function Testimonial({Reviews}){

    const [reviewsCount, setReviewsCount] = useState(0);

    
    function handleBackward(){
        if(reviewsCount > 0){
            setReviewsCount(reviewsCount - 1);
        }else{
            console.log('Entered the else part');
            setReviewsCount(7);
        }
    }

    function handleForward(){
        if(reviewsCount < Reviews.length - 1){
            setReviewsCount(reviewsCount + 1);
        }else{
            setReviewsCount(0);
        }
    }

    function HandleSuprise(){
       let randomNo =  Math.floor(Math.random() * Reviews.length);
       setReviewsCount(randomNo);
    }

    return(
        <div className="w-[85vw] md:w-[700px] rounded-md bg-white p-10 mt-10  transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-slate-800">
           <Cards Review = {Reviews[reviewsCount]}/>

           <div className="flex justify-center gap-5">

            <div className="space-x-5 text-2xl text-slate-500 hover:text-violet-800">
                <button onClick={handleBackward}><HiMiniChevronDoubleLeft /></button>
            </div>
            <div className="space-x-5 text-2xl text-slate-500 hover:text-violet-800">
                <button onClick={handleForward}><HiMiniChevronDoubleRight /></button>
            </div>

            </div>
            
            <button onClick={HandleSuprise}
            className = "flex justify-center m-auto bg-violet-400 hover:bg-violet-900 py-2 px-7 font-bold rounded-md mt-4 text-white transition-all duration-200">
               Suprise Me
            </button>
        </div>
    )
}

export default Testimonial;