import React from "react";
import './CreateButton.css';

function CreateButton(props){
    // evento
    const onClickButton = () => {
        if(props.openModal){
            props.setOpenModal(false);
        }else{
            props.setOpenModal(true);
        }
    };

    return(
        <button 
        className={"BotonAgregar Volteando"}
        // con onAlgo, podremos escuchar todos los eventos
        // que hagan nuestros usuarios en nuestra aplicacion
        
        // hay que enviar una funcion
        // siempre se debe envolver nuestra accion dentro de
        // una funcion como la que se encuentra aqui abajo
        onClick={onClickButton}
        >
            +
        </button>
    );


}

export { CreateButton };