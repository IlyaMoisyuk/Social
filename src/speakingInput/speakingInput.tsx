import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import style from './speakingInput.module.scss'
import { v1 } from 'uuid';


type nameListType = {
    id: string,
    name: string
}

const SpeakingInput = () =>{

    const [nameList, setNameList] = useState <Array<nameListType>>([])
    const [inputValue, setInputValue] = useState<string>('')

    const addName = (name: string) =>{
        if(name.replace(/\s/g, '') !== '') {
            let newName = {
                id: v1(),
                name: name
            }
            alert(name)
            setInputValue('')
            setNameList([...nameList, newName]);
        }
    }

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode == 13){
            addName(inputValue)
        }
    }

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.currentTarget.value)
    }

    const clickAddName = () => addName(inputValue);

    const nameView = nameList.map( el => <li key={el.id}>{el.name}</li> );

    return(
        <div className={style.wrapperInput}>
            <div>
                <input type='text' value={inputValue} onKeyPress={pressEnter} onChange={changeInputValue}/>
                <button onClick={clickAddName}>Add name</button>
            </div>
            <div>
                <ul>
                    {nameView}
                </ul>
            </div>
        </div>
    )
}

export default SpeakingInput;