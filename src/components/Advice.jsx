import patternDividerMobile from "../assets/images/pattern-divider-mobile.svg";
import patternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import iconDice from "../assets/images/icon-dice.svg"
import { useEffect } from "react";
import { useState } from "react";
const Advice = ()=>{


const url = "https://api.adviceslip.com/advice";
const [db, setDb] = useState(0);
const [error, setError] =useState("");



// function to generate advice using api
const generateAdvice = ()=>{

    fetch(url)
    .then(res=>res.json())
    .then(db=>{setDb(db.slip)})
    .catch(error=>setError(error.message))
}



useEffect(()=>{generateAdvice()}, [])

// console.log(error);



return(
<div className="bg-slate-800 py-[1em] px-[2em] relative max-w-[600px] " >
<h1 className="text-[color:hsl(150,100%,66%)] text-[15px] text-center py-[1em] " >
    ADVICE #{db.id}
</h1>


<p className="text-center text-white py-[1em] " >
    {db?db.advice:error}
</p>

<div className="w-[90%] mx-auto flex justify-center items-center py-[2em]  " >
    <img src={patternDividerMobile} alt="pattern_divider_mobile" className="md:hidden " />
    <img src={patternDividerDesktop} alt="pattern_divider_desktop" className="hidden md:block"  />
</div>

{/* icon dice */}
<div className="bg-[color:hsl(150,100%,66%)]  w-[12%] p-[.5em] rounded-[50%]  mx-auto absolute inset-x-0  " onClick={()=>{generateAdvice()}}  >
<img src={iconDice} alt="icon_dice" className="w-[50%] mx-auto " />
</div>
</div>
)

};

export default Advice;