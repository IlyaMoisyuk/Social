import React from 'react';
import './App.css';
import Message from './messages/message'
import TasksWrapper from './tasksWrapper/tasksWrapper'
import SpeakingInput from "./speakingInput/speakingInput";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export type TaskContentType = {
    id: number,
    n: string,
    p: string
}


function App() {


    const taskContent: Array<TaskContentType> =  [
        {id: 1, n: "работа", p: "hight"},
        {id: 2, n: "аниме", p: "low"},
        {id: 3, n: "игры", p: "middle"},
        {id: 4, n: "реакт", p: "hight"},
        {id: 5, n: "хтмл", p: "low"}
    ];

    const date: Date = new Date();


    return (
        <>
            <Message name={"Илья"} id={1} message={'npm start нажимал?'} imgSrc={'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'} time={`${date.getHours()}:${date.getMinutes()} `}/>
            <TasksWrapper content={taskContent}></TasksWrapper>
            <SpeakingInput />
        </>
    );
}


export default App;
