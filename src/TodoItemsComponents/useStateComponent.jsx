import React, {useState} from 'react';

const UseStateComponent=()=>{
    let [count, setCount]=useState(0);
    const[value,setValue]=useState("Select");
    return (
        <div className="counter">
         <div className="Count">
            <p className="count_display">Counter:{count}</p>
            <button className="count_button" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="count_button" onClick={() => setCount(count - 1)}>Decrement</button>
         </div>
             <h4 className="value">Value is: {count % 2 == 0 ? "Even" : "Odd"}</h4>
        </div>
    );
};
export default UseStateComponent;