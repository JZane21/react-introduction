import React from "react";
// import { TareaContext } from "../TareaContext";
import './Counter.css';

function Counter({ 
    tareasTotales,
    tareasCompletadas,
    loading
}){
    
    const mostrarTexto = () => {
        return !loading ? "Has completado "+tareasCompletadas+" de "+tareasTotales+" Pendientes"
        : "Espere unos momentos";
    };

    return(
        // forma 1 de trabajar con CSS
        // <h2 style={{
        //     color: 'red',
        //     backgroundColor: 'yellow'
        // }}>Has completado 2 de 3 TODOs</h2>

        //forma 2 de trabajar con CSS
        <>
            <h2 className="contador">
                {mostrarTexto()}
            </h2>
        </>
    );
}

export { Counter };