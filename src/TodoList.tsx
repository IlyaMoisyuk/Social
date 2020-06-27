import React from 'react';
import {TaskType} from "./App";

type PropsType = {
    title: string,
    task: Array<TaskType>
}


function TodoList(props: PropsType) {

    let {title, task} = props

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input id={`input${task[0].id}`} type="checkbox" checked={task[0].isDone}/> <span>{task[0].title}</span></li>
                <li><input id={`input${task[1].id}`} type="checkbox" checked={task[1].isDone}/> <span>{task[1].title}</span></li>
                <li><input id={`input${task[2].id}`} type="checkbox" checked={task[2].isDone}/> <span>{task[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}


export default TodoList;