import React from "react";
import './Item.css';
import { FiCheck, FiX } from "react-icons/fi";

function Item(Elemento){
    // eventos

    return(
        <li className="Barra">
            <span className={`Icon Icon-check Icon-selected 
                ${Elemento.completed &&'Icon-check--active'}`}
                onClick={!Elemento.completed ? Elemento.onCompleted : 
                Elemento.onCanceled}
            >
                    {/* <strong>&#10003;</strong> */}
                    <FiCheck className=''/>
            </span>
            <span className="Icon Icon-delete Icon-selected"
                onClick={Elemento.onDeleted}
            >
                    {/* <strong>X</strong> */}
                    <FiX />
            </span>
            <p className={`Item-p 
                ${Elemento.completed && 'Item-p--completed'}`}>
                    {Elemento.text}
            </p>

            {/* <CompleteIcon
                completed={Elemento.completed}
                onCompleted={Elemento.onCompleted}
            />
            <DeleteIcon
                onDeleted={Elemento.onDeleted}
            />

            <p className={`Item-p 
                ${Elemento.completed && 'Item-p--completed'}`}>
                    {Elemento.text}
            </p> */}
        </li>
    );
}

export { Item };