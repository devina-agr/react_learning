import React, {useEffect, useState} from 'react';
import button from "./Button";

const UseEffectComponent=()=>{

    const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);
    useEffect(()=>{
        console.log("Mounting my useEffect component 1",count1);
        // console.log("Mounting my useEffect component 2",count2);
        //this will print the statement when the component is mounted again and again by incrementing the count.
        return function(){
            console.log("Counting unmounted number", count1);
        };

    },[count1]);


    return (
        <div className="useEffect">
            <h3 className="useEffect"> Count1:{count1} </h3>
            <button className="update" onClick={() => setCount1(count1 + 1)}> Update1</button>
            {/*<h3 className="useEffect"> Count2:{count2} </h3>*/}
            {/*<button className="update" onClick={() => setCount2(count2 + 1)}> Update2</button>*/}
        </div>
    );
};
export default UseEffectComponent;