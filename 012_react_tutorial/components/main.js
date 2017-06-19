import React from 'react';
import {AddNewTask} from './addTask';
import {ToDoAppList} from './appList';

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = { tasks: props.tasks }
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
    }

    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.push(text);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks) {
        console.log('saved the tasks');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div>
                <h1>ToDoApp</h1>
                <AddNewTask updateList={this.updateList}/>
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
            </div>
        );
    }
}
