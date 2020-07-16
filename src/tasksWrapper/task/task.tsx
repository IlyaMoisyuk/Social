import React from "react";
import style from './task.module.scss'

type propsTypeTask = {
    id: number,
    title: string,
    priorety: string,
    deleteItem: (id: number) => void
}

const Task: React.FC<propsTypeTask> =  (props) => {
    let {title,priorety, deleteItem, id} = props;

    return(
        <div className={`${style[priorety]} ${style.taskContainer} `}>
            <span>{title}</span>
            <span className={style.closeTask} onClick={deleteCallBack}>X</span>
        </div>
    )

    function deleteCallBack(): void{
        deleteItem(id);
    }
}

export default Task;