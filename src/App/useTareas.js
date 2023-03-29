import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// const TareaContext = React.createContext();

function useTareas(){
    const {
        item: tareas,
        saveItem: saveTareas, 
        loading: loading,
        error: error
    } = useLocalStorage('TAREAS_V1',[]);
    
    // declarando nuestro estado
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
    
    // aqui guardaremos cuantas tareas se han completado
    const tareasCompletadas = 
    tareas.filter(tarea => tarea.completed).length;
    
    // let coincidencias = ['']
    
    // const busqueda = (valor) => {
    // tareas.forEach(tarea => tarea.text.includes(valor) ? coincidencias.push(valor) :
    // coincidencias.push(valor))};
    
    // busqueda(searchValue)
    
    // let textoGrande = [];
    // for (let index = 0; index < tareas.length; index++) {
    //   textoGrande[index] = tareas[index].text.length;
    // }
    // textoGrande.sort((a,b)=>a-b);
    
    let tareasBuscadas = [];
    
    if(!searchValue.length >= 1){ 
        tareasBuscadas = tareas;
    } else {
        tareasBuscadas = tareas.filter(tarea=>{
        const textoTarea = tarea.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return textoTarea.includes(searchText);
        });
    }
    
    const tareasTotales = tareas.length;

    const agregarTarea = (texto) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.push({
            completed: false,
            text: texto
        });
        saveTareas(nuevasTareas);
    };
    
    const tareasHechas = (texto) => {
        const Index = tareas.findIndex(tarea=>tarea.text===texto);
        const nuevasTareas = [...tareas];
        nuevasTareas[Index].completed = true;
        saveTareas(nuevasTareas);
    };
    
    const tareasCanceladas = (texto) => {
        const Index = tareas.findIndex(tarea=>tarea.text===texto);
        const nuevasTareas = [...tareas];
        nuevasTareas[Index].completed = false;
        saveTareas(nuevasTareas);
    }
    
    const tareasEliminadas = (texto) => {
        const Index = tareas.findIndex(tarea=>tarea.text===texto);
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(Index,1);
        saveTareas(nuevasTareas);
    };
    
    // efectos en React
    // este hook ejecutara todo lo que le enviemos antes de
    // que React reenderice todos los componentes
    
    // React.useLayoutEffect: casi nunca es usado, debido a que
    // en React podemos manejar todos los eventos que se nos presenten
    // sin mucha dificultad
    
    // console.log('Teoricamente esto debe aparecer antes del useEffect');
    
    // React.useEffect(()=>{
    //   console.log('Use effect in React XD');
    //   // Este array nos permitira definir cuando se debe ejecutar el 
    //   // useEffect
    //   // Esto seria una condicion para el useEffect
    // }, [tareasTotales]);
    
    // console.log('Esto se deberia ejecutar luego del useEffect');

    return {
        loading,
        error,
        searchValue,
        setSearchValue,
        tareasTotales,
        agregarTarea,
        tareasHechas,
        tareasCanceladas,
        tareasEliminadas,
        tareasCompletadas,
        tareasBuscadas,
        openModal, 
        setOpenModal,
    };
}

export { useTareas };