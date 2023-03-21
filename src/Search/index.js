import React from "react";
import { TareaContext } from "../TareaContext";
import './Search.css';
import logo from './logo.svg';

function Search(){
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TareaContext);
    // agregar estado a nuestro componente con funciones

    //estado
    // Esto es un hook, los hooks son son funciones que 
    // te permiten enganchar el estado de React y el ciclo 
    // de vida desde componentes funcionales, entre muchas 
    // otras cosas. Nos permiten usar React sin clases.
    
    // evento
    const onSearchValueChange = (tarea) => {
        // nos permite detectar que es lo que estan escribiendo
        // nuestros usuarios
        console.log(tarea.target.value);
        setSearchValue(tarea.target.value);
    };

    return(
        <div className="padreSearcher">
            <div className="flexBox">
                <input 
                className="EntradaDeDatos" 
                placeholder="Tarea"

                // agregandole un nuevo valor al value, el cual
                // sera la cadena de texto que queremos que sea leida
                // por React
                value={searchValue}

                // al igual que el onClick, mientras interactuemos
                // con el input, seremos capaces de enviar cambios a
                // nuestro programa, mientras llamamos a nuestro
                // metodo
                onChange={onSearchValueChange}    
                />
            </div>
            <div className="flexBox">
                <figure className="App-image">
                <img src={logo} className="App-logo" alt="logo" />
                </figure>
            </div>
        </div>
    );
}

export { Search };