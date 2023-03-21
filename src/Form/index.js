import React from "react";
import './Form.css';
import { TareaContext } from "../TareaContext";

function Form(){

    const [newTareaValue, setNewTareaValue] = React.useState('');

    const {
        agregarTarea,
        setOpenModal,
    } = React.useContext(TareaContext);

    const onWrite = (evento) => {
        setNewTareaValue(evento.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (evento) => {
        if(newTareaValue.length!==0){
            evento.preventDefault();
            agregarTarea(newTareaValue);
        }else{
            evento.preventDefault();
            alert("La tarea debe tener un texto descriptivo");
        }
    }

    return (
        <form onSubmit={onSubmit} className="formulario">
            <h2 className="titulo">
                Crear Tarea
            </h2>

            {/*textarea: etiqueta
            que permite que nuestro texto ingresado como input
            no se vaya para abajo */}
            <textarea
            value={newTareaValue}
            onChange={onWrite}
            placeholder="Tarea Nueva"
            className="textBox"
            />
            <div>
                <button
                    type="button"
                    className="boton"
                    onClick={onCancel}
                >
                    Cancelar   
                </button>
                <button
                    className="boton"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { Form }