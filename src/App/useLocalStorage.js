import React from "react";

// creando un primer Hook personalizable
// esta funcion nos devolvera los items de nuestros localStorage
// y tambien los items que hayamos guardados dentro del
// localStorage
function useLocalStorage(itemName, initialValue){
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    const [error, setError] = React.useState(false);
  
    // con ello, indicamos que se debe simular que esta tardando
    // en cargar la pagina por 1 segundo
    const [loading, setLoading] = React.useState(true);
  
    // Declarando una pareja de datos, la cual ayudara a
    // guardar los datos que el usuario haya insertado en nuestra
    // aplicacion
    // Valor por defecto de nuestro array inicial
    const [item, setItem] = React.useState(initialValue);
  
    // Simula un tiempo de 1 segundo que se tarda en cargar, 
    // pero a demas de ello va a llamar a la funcion setItem 
    // para actualizar el valor y devolver el verdadero valor 
    // guardado en el localStorage
    React.useEffect(()=>{
      setTimeout(() => {
        try{
          // declarando una variable de tipo localStorage
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
  
          // con ello establecemos que la pagina deje de simular que esta
          // tardando 1 segundo en cargar
          setLoading(false);
          setSincronizedItem(true);
        }catch(error){
          setError(error);
        }
      }, 3000);
    },[sincronizedItem]);
  
  
    const saveItem = (newItem) => {
      try{
        const stringified = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringified);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    };
    
    // si al enviar un react hook, se tiene que enviar mas de dos
    // estados como si se trataran de posiciones de un arreglo, podria
    // generar imprevistos en el futuro, y debido a ello, se debe
    // empezar a enviar un objeto en lugar de un array con esos mismos
    // estados
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
      sincronizedItem
    };
}

export { useLocalStorage };