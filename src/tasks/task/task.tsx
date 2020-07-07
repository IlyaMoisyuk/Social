import React from "react";

type propsTypeTask = {
    id: number,
    title: string,
    priorety: string,
    deleteItem: (id: number) => void
}

const Task: React.FC<propsTypeTask> =  (props) => {
    let {title,priorety, deleteItem, id} = props;

    return(
        <div className={priorety + " taskContainer"}>
            <span>{title}</span>
            <span className='closeTask' onClick={() => deleteCallBack()}>X</span>
        </div>
    )

    function deleteCallBack(): void{
        deleteItem(id);
    }
}

export default Task;