import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Message from './messages/message';


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


function App() {

    const task1: Array<TaskType> = [
        {
            id: 1,
            title: "HTML",
            isDone: false
        },
        {
            id: 2,
            title: "js",
            isDone: false
        },
        {
            id: 3,
            title: "CSS",
            isDone: false
        }
    ];

    const task2: Array<TaskType> = [
        {
            id: 1,
            title: "Beer",
            isDone: false
        },
        {
            id: 2,
            title: "Fish",
            isDone: false
        },
        {
            id: 3,
            title: "Cheeps",
            isDone: false
        }
    ];

    const date: Date = new Date();


    return (
        <>
            <div className="App">
                <TodoList title={'What to learn'} task={task1}/>
                <TodoList title={'Songs'} task={task2}/>
                {/*<TodoList title={'Books'} task={task1}/>*/}
            </div>
            <Message name={"Илья"} id={1} message={'npm start нажимал?'} imgSrc={'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'} time={`${date.getHours()}:${date.getMinutes()} `}/>
        </>
    );
}


export default App;
