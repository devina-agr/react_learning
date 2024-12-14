# React

Components in the React application file:

* ### node_modules:
It includes all the dependencies, packages or libraries installed in the project.
* ### public:
It is the actual folder that works as the root of the application. It includes the _**index.html file**_ that is the main file of the application.
* ### src:
It is the entry point of the application. The compilation of the application starts from this folder.
It is basically the source folder of the application. It includes all the components of the application.
It includes the following files:

#### ~ index.js:
index.js is the main file of the application. It is the file that is responsible for rendering the application.

          const root = ReactDOM.createRoot(document.getElementById('root'));

In the above code the root is being created by calling the method createRoot() of ReactDOM. The root is being created by passing the id of the root element of the index.html file.

          root.render(<App />);

This render the App component in the root element of the index.html file.

#### ~App.js:

App.js is the main component of the application. The code in this file is written in jsx.
**IMP:** In this file we don't give class attribute to the component, instead we use className attribute, because class is a reserved keyword in javascript.

#### ~ App.css:

It is the file that includes the styling of the application.

* ### package.json:
It is the file that includes all the dependencies, scripts, and metadata of the project. It is bascially the configuration file of the project.


In react components are the building blocks of the application. Every function in react is a component. Components are reusable and can be used in other components.

Example of a component:

          imort React from 'react';
          function App() {
            return (
              <div className="App">
                <h1>Hello World</h1>
              </div>
            );
          }
Here App is a component that returns a div element with a h1 element inside it.

RULES OF COMPONENTS:

* Every component must return a _JSX_.
* Every component must start with _uppercase_.

There are two types of components in react:

* Functional Components
* Class Components

Exapmle of a functional component:


          function MyFunction() {
          const name="Developer";
          return <h1> Hello, {name} </h1>;
          }


### Props in React:

Props are used to take the value as a parameter in the component.
It makes the component dynamic and more **generic**.

        const Header = (props) => {
        return <h1 className="todo_header">{props.input}</h1>
        };

This statement is used when we need to check if the props passed is completed then do a certain task, else do another task.


In the compnent we can use the ternary operator to check the condition.

     {props.completed ? <></> : <input type="checkbox"/>}

In the App.js we can assign the value as true or false to the props.

          <TodoItems completed="true" txt="Code"/>

### State in React:

A state of a component is a variable that holds some information that may change over the lifetime of the component.

when the _value_ of the state of a component changes, the component _re-renders_ itself to display the _updated values_.

### Hooks in React:


Hooks in React are functions that let you use React features (like state and lifecycle) inside functional components.

### 1) useState hook:
useState is a hook that lets you add state to functional components.

    
This is how we import the useState hook in the component:

    import React, {useState} from 'react';

This how we declare a state in a functional component:

    const [state, setState] = useState(initialState);

Here state is the variable that holds the value of the state and setState is the function that is used to update the value of the state.

#### Use of the useState hook:

    <button className="count_button" onClick={() => setCount(count - 1)}>Decrement</button>
    <h6 className="value">Value is: {count % 2 == 0 ? "Even" : "Odd"}</h6>


### 2) useEffect hook:

It run code during the change in the lifecycle of the component.

_Syntax of the useEffect hook:_

    useEffect(() => {
    // code to run
    }, [dependencies]);

Here, the first argument is the function that is to be run and the second argument is the array of dependencies.


We write the code for this in the App.js file or in the component file.

Import:

    import React, {useEffect} from 'react';

Code:

    const App=()=>{


      const MyComponent = () => {

        useEffect(()=>{
            console.log("Component mounted");
        },[]);

        return <h3 className="useEffect">Its the useEffect code!</h3>
      }
    };


In this code [] is the array of dependencies. If we pass an empty array then the code inside the useEffect hook will run only once when the component is mounted.
But when we pass a variable in the array then the code inside the useEffect hook will run whenever the value of the variable changes.

For example:

const UseEffectComponent=()=>{

    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Mounting my useEffect component",count);
        //this will print the statement when the component is mounted again and again by incrementing the count.
    },[count]);


     return (
        <div className="useEffect">
          <h3 className="useEffect" > Count:{count} </h3>
          <button className="update" onClick={()=>setCount(count+1)}> Update</button>
        </div>
     );
    };

In the above eg, the statement will be printed whenever the value of the count changes, i.e. whenever the update button is clicked.


### Unmounting the component:

We need to declare this inside the function(component) that we are returning.

    const [isVisible, setVisible] = useState(true);

Inside the return statement:

        {isVisible ? <UseEffectComponent/> : <></>}
        <button className="useEffect" onClick={() => setVisible(!isVisible)}>Toggle</button>
 
By this code, if we click on the toggle button it will check the value of the isVisible variable and if it is true then it will render the above component and if it is false then it will not render the component.

### Printing the statements while unmounting:
#### IMP:
* When a dependency is passed in the useEffect hook, then the code inside the unmounting (return statement of useEffect) will run whenever the value of the dependency changes.

         useEffect(()=>{
            console.log("Mounting my useEffect component 1",count1);
            return function(){
              console.log("Counting unmounted number", count1);
            };

          },[count1]);

* But if we pass an empty array in the useEffect hook then the code inside the unmounting (return statement of useEffect) will run twice when the component is mounted and when it is unmounted.
        
              useEffect(()=>{
                 console.log("Component mounted in App");
                 return function(){
                    console.log("Component unmounted");
                 };
              },[]);

