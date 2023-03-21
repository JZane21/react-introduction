import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.js';
// import './index.css';

// IMPORTANTE:
/*
  la forma de crear un proyecto react es con el comando:
  npx create-react-app carpeta-en-minusculas (o ./)

  ejecutar el proyecto en react:
  npm start
*/

// const root2 = ReactDOM.createRoot

//Esta es la forma de manipular el DOM con react en principio

// Los componentes permiten separar la interfaz de usuario en piezas 
// independientes, reutilizables y pensar en cada pieza de forma aislada
 
//la forma de crear componentes en react se da  a traves de:

// const e = React.createElement // -> componente

//creando un componente
// function App(){
// //de esta forma basica, podemos interacturar con el HTML usando
// //React, pero hay que recordar que el codigo que se encuentra
// //por debajo NO es codigo HTML, sino JSX
//   return (
//     <h1 id="title">
//       'Haloooo Reactjs XD'
//     </h1>
//     // en lugar de enviar cambios a HTML a traves de la linea de abajo,
//     // podemos usar lo que se encuentra arriba
//     // React.createElement('h1',{id:'title'},'Haloooo Reactjs XD')
//   );
// }

// con el codigo de aqui abajo, estamos creando una variable
// reenderizadora, la cual nos ayudara a manipular el DOM
// con mayor facilidad
const root = ReactDOM.createRoot(document.getElementById('root'));

// con el codigo que se encuentra aqui abajo,
// estamos reenderizando un componente que
// guardamos previamente en ./App
// todo lo que se encuentre en root.render,
// lo va a reenderizar
root.render(
  // componente
  // <App />
  // propiedad
  // <App saludo="Oli mundo Strange"/>

  // Aunque esta etiqueta JSX tenga que verse en nuestra pagina web
  // al inspeccionarla, no suceder'a, debido a que estas etiquetas
  // JSX son invisibles para HTML y solo se ven en React
  
  // forma 1 de enviar parametros al componente App:
  // <App primerParametro="Esto es un parametro"/>

  // forma 2 de enviar parametros al componente App:
  // <App>
  //   <h1>
  //     Esto es un parametro
  //   </h1>
  // </App>
  <App />
);

ReactDOM.createPortal(
  <App/>,
  document.getElementById('modal')
);