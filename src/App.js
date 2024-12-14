// import logo from './logo.svg';
import './App.css';
import Header from './TodoItemsComponents/Header';
import TodoItems from './TodoItemsComponents/TodoItems';
import Button from './TodoItemsComponents/Button';
import UseStateComponent from './TodoItemsComponents/useStateComponent';
import UseEffectComponent from './TodoItemsComponents/useEffectComponent';
import Timer from './TodoItemsComponents/Timer';
import React, {useEffect, useState} from "react";
import './style.css';

const App=()=>{

    const [isVisible, setVisible] = useState(true);

    const MyComponent = () => {

        useEffect(()=>{
            console.log("Component mounted in App");

            return function(){
                console.log("Component unmounted");
            };
        },[]);

        return <h3 className="useEffect">Its the useEffect code!</h3>
    }
    return (
        <div className="todo_container">
            <Header input="Todoie List"/>
            <TodoItems completed="true" txt="Code"/>
            <TodoItems txt="Develop"/>
            <TodoItems txt="Eat"/>
            <TodoItems txt="Study"/>
            <TodoItems txt="Play"/>
            <TodoItems txt="Talk"/>
            <Button/>
            <UseStateComponent/>
            <MyComponent/>
            {isVisible? <UseEffectComponent/>: <></>}
            <button className="useEffect" onClick={() => setVisible(!isVisible)}>Toggle</button>
            <Timer/>
        </div>
    );
};

export default App;
