import React, { Component } from 'react';

class ToDoItem extends Component{

    state = { task: '' };

    onTaskInput = (e) => {
        e.preventDefault();
        // add props
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.onTaskInput }>
                    <label>Task:</label>
                    <input 
                        type="text" 
                        onChange={ (e) => this.setState({ task: e.target.value }) }></input>
                </form>
            </div>
        )
    }
}

export default ToDoItem;