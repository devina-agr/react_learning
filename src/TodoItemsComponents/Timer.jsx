import React, {useState, useEffect} from "react";

const Timer=()=>{
    const [time, setTime]=useState(0);

    useEffect(()=>{

        const timer= setInterval(()=>setTime(time+1),1000);
        return function(){
             clearInterval(timer)
        };

    },[time]);

    return(
        <div className="useEffect">
            <h2 className="stopwatch">Stopwatch</h2>
             <p className="time">Current time: {time}</p>
        </div>
    );
}
export default Timer;

