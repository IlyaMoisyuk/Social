import React from 'react';
import style from './message.module.scss';

type MessageType = {
    name: string,
    id: number
    message: string,
    imgSrc: string,
    time: string
}


const Message: React.FC<MessageType> = (props) => {

    let {name, id, message, imgSrc, time} = props;

    return (
        <div className={style.messageContainer}>
            <div className={style.imgContainer}>
                <img src={imgSrc}/>
            </div>
            <div className={style.textContainer}>
                <div className={style.name}>{name}</div>
                <div className={style.message}> {message}</div>
                <div className={style.time}>{time}</div>
            </div>
        </div>
    )
}


export default Message;