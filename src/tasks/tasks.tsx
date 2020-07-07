import React, {useState} from "react";
import style from './task.module.scss';
import {TaskContentType} from './../App';
import Task from "./task/task";

type PropsType = {
    content: Array<TaskContentType>
}


const Tasks: React.FC<PropsType> =  (props) => {
    let {content} = props;
    const [list, setList] = useState(content)


    return(
        <div className={style.taskWrapper}>
            <div className={style.menu}>
                <input type='button' value='all' onClick={() => allItem()}/>
                <input type='button' value='hight' onClick={() => hightItem()}/>
                <input type='button' value='low' onClick={() => lowtItem()}/>
                <input type='button' value='middle' onClick={() => midletItem()}/>
            </div>
            {list.map( (el,key) => {
               return <Task key={el.id} id={el.id} title={el.n} priorety={el.p} deleteItem={(id) => deleteItem(id)}></Task>
            } )}
        </div>
    )

    function deleteItem(id: number) : void {
        setList( list.filter(el => el.id !== id) )
    }

    function hightItem(){
        setList( content.filter( el => el.p === "hight"))
    }
    function lowtItem(){
        setList( content.filter( el => el.p === "low"))
    }
    function midletItem(){
        setList( content.filter( el => el.p === "middle"))
    }
    function allItem(){
        setList(content)
    }
}

export default Tasks;