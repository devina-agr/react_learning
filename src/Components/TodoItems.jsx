import React from "react";

const TodoItems = (props) => {
    return (
        <li className="todo_items">
            <input type="checkbox"/>
            <p className="text">{props.txt}</p>
            <p className="option">...</p>
        </li>
    );
    
};
export default TodoItems;