// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TodoItems from './Components/TodoItems';
import Button from './Components/Button';
import './style.css';

const App=()=>{
    return (
        <div className="todo_container">
            <Header />
            <TodoItems txt="Code"/>
            <TodoItems txt="Develop"/>
            <TodoItems txt="Eat"/>
            <TodoItems txt="Study"/>
            <TodoItems txt="Play"/>
            <TodoItems txt="Talk"/>
            <Button />
        </div>
    );
};

export default App;
