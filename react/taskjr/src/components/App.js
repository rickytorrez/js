import React, { Component } from 'react';

import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';

class App extends Component  {

    constructor(){
        super();
        this.state = { 
            todos: []
        };
    }

    render() {
        return(
            <div>
                <ToDoList />
                <ToDoItem />
            </div>
        )
    }

    // gets called when the component is rendered in the DOM
    componentDidMount = () => {
        const todos = localStorage.getItem('todos');
        if(todos){
            const savedTodos = JSON.parse(todos);
            this.setState({ todos:savedTodos });
        } else {
            console.log('no todos');
        }
    }
}

export default App;