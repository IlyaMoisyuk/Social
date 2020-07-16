import React, {useState} from "react";
import style from './tasksWrapper.module.scss';
import {TaskContentType} from './../App';
import Task from "./task/task";

type PropsType = {
    content: Array<TaskContentType>
}


const TasksWrapper: React.FC<PropsType> =  (props) => {
    let {content} = props;
    const [list, setList] = useState(content)


    return(
        <div className={style.taskWrapper}>
            <div className={style.menu}>
                <input type='button' value='all' onClick={() => allItem()}/>
                <input type='button' value='hight' onClick={() => filterItem('hight')}/>
                <input type='button' value='low' onClick={() => filterItem('low')}/>
                <input type='button' value='middle' onClick={() => filterItem('middle')}/>
            </div>
            {list.map( (el,key) => {
               return <Task key={el.id} id={el.id} title={el.n} priorety={el.p} deleteItem={(id) => deleteItem(id)}></Task>
            } )}
        </div>
    )

    function deleteItem(id: number) : void {
        content.forEach((el, i, arr) => {
            if(el.id == id){
                arr.splice(i,1);
            }
        })
        let newMas = [...content];
        setList(newMas)
    }

    function filterItem(title: string) : void {
        setList(content.filter( el => el.p === title))
    }

    function allItem(){
        setList(content)
    }
}

export default TasksWrapper;