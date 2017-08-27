import React from 'react';
import ReactDOM from 'react-dom';
// import {Todo} from './components/main';
import {Shape} from './components/shapes';

// var tasksList = ["Task 1", "Task 2", "Task 3"];
//
// var tasks = localStorage.getItem('storedTasks');
//
// if (tasks) {
//     tasksList = JSON.parse(tasks);
// }

ReactDOM.render(
    <div>
        <Shape name="circle" color="red" />
        <Shape name="square" color="blue" />
        <Shape name="rectangle" color="green" width="200px"/>
    </div>,
    document.getElementById('todo')
);
