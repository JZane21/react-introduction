import React from "react";
// import { TareaContext } from "../TareaContext";
import './Counter.css';

function Counter({ 
    tareasTotales,
    tareasCompletadas
}){
    
    return(
        // forma 1 de trabajar con CSS
        // <h2 style={{
        //     color: 'red',
        //     backgroundColor: 'yellow'
        // }}>Has completado 2 de 3 TODOs</h2>

        //forma 2 de trabajar con CSS
        <div className="divContador">
            <h2 className="contador">
                Has completado {tareasCompletadas} de {tareasTotales} Pendientes
            </h2> 
        </div>
        
    );
}

export { Counter };