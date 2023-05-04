import React from 'react';

// Proyecto Original
// import { AppUI } from './AppUI';
// import { TareaProvider } from './useTareas';
import { useTareas } from './useTareas';
import './App.css';
import { Header } from "../Header";
import { Counter } from '../Counter';
import { Search } from '../Search';
import { CreateButton } from '../CreateButton';
import { ItemList } from '../ItemList';
import { Item } from '../Item';
import { Modal } from "../Modal";
import { Form } from "../Form";
import { Error } from "../Error";
import { Loading } from "../Loading";
import { Empty } from "../Empty";
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

// const arregloTareas=[
//   { text:'Cortar cebolla', completed:false },
//   { text:'Tomar mucha agua', completed:false },
//   { text:'Llorar por la Universidad todo sad', completed:false },
//   { text:'Enrique le devolvera sus lapices a Ander', completed:true },
//   { text:'Do your english homework', completed:true }
// ];



/* //--- NO BORRAR ---

// Forma alternativa de construir la App
// del curso anterior
function App(){
  // inicializando un estado en nuestra app
  const [state, setState] = React.useState('estado compartido');
  return (
    <React.Fragment>
      <Header>
        <Counter/>
        <Search/>
      </Header>
      
      <ItemList>
        <Item state={state}/>
      </ItemList>
    </React.Fragment>
  );
}

function Header({children}){
  return (
    <header>
      {children}
    </header>
  );
}

function ItemList({children}){
  return (
    <section className="TodoList-Container">
      {children}
    </section>
  );
}

function Counter(){
  return (
    <p>
      Counter App
    </p>
  );
}

function Search(){
  return (
    <p>
      Search App
    </p>
  );
}

function Item({state}){
  return (
    <p>
      Item {state}
    </p>
  );
}

*/ //--- NO BORRAR ---

// Proyecto Original
function App(){

  const {
    error, 
    loading, 
    tareasBuscadas, 
    tareasHechas, 
    tareasEliminadas,
    tareasCanceladas,
    openModal,
    tareasTotales,
    tareasCompletadas,
    searchValue,
    setSearchValue,
    agregarTarea,
    setOpenModal,
    sincronizeTarea,
    tareasSincronizadas,
  } = useTareas();

  return (
    // instanciando una etiqueta invicible en React
    <React.Fragment>

    <Header loading={loading}>
        <Counter
          tareasTotales={tareasTotales}
          tareasCompletadas={tareasCompletadas}
        />

        {(!loading && tareasTotales!==0 && !error) && 
         <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />   
        }
    </Header>
    <main className="main-container">
      {/* {(!loading && tareasTotales!==0 && !error) && 
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />   
      } */}
      <ItemList
        error={error}
        loading={loading}
        tareasBuscadas={tareasBuscadas}
        tareasTotales={tareasTotales}
        searchValue={searchValue}
        onError={() => <Error error={"ERROR INESPERADO!"} />}
        onLoading={() => <Loading loading={"Cargando..."} />}
        onEmpty={() => <Empty vacio={"No hay elementos en la lista"} />}
        onEmptySearchedTareas = {
          () => (
            <Empty/>
          )
        }
        // render={tarea => (
        //   <Item 
        //     key={tarea.text}
        //     text={tarea.text}
        //     completed={tarea.completed}
        //     onCanceled={()=>tareasCanceladas(tarea.text)}
        //     onCompleted={()=>tareasHechas(tarea.text)}
        //     onDeleted={()=>tareasEliminadas(tarea.text)}
        //   />
        // )}
      >
        {tarea => (
          <Item 
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            onCanceled={()=>tareasCanceladas(tarea.text)}
            onCompleted={()=>tareasHechas(tarea.text)}
            onDeleted={()=>tareasEliminadas(tarea.text)}
          />
        )}
      </ItemList>

      {/* <ItemList> */}
        {/* {error && <Error error={error} />}
        {loading && <Loading loading={"Cargando..."} />}
        {(!loading && !tareasBuscadas.length) && 
        <Empty vacio={"No hay tareas registradas"}/>}

        {tareasBuscadas.map(tarea => (
        <Item 
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            onCanceled={()=>tareasCanceladas(tarea.text)}
            onCompleted={()=>tareasHechas(tarea.text)}
            onDeleted={()=>tareasEliminadas(tarea.text)}
        />
        ))} */}
      {/* </ItemList> */}

      {openModal && (
      <Modal>
          <Form
            agregarTarea={agregarTarea}
            setOpenModal={setOpenModal}
          />
      </Modal>
      )}

      {(!loading && !error) && <CreateButton  
          openModal = {openModal}
          setOpenModal={setOpenModal}
      />}

      <ChangeAlertWithStorageListener 
        sincronize={sincronizeTarea}
      />
    </main>

  </React.Fragment>
  );

  // return(
  //   <TareaProvider>
  //     <AppUI/>
  //   </TareaProvider>
  // );
}


//App por defecto
// function App(propiedad) {
//   return (
//     // IMPORTANTE: este codigo es jsx, NO HTML
//     // IMPORTANTE: Hay que tener cuidad con el 'class' de JS 
//     // y el 'className' de JSX

    

//     // La diferencia entre una etiqueta html y un Elemento en React
//     // es que los elemtos en react son el producto del lenguaje
//     // JSX, el cual tiene cierto parecido a HTML sin serlo, y React
//     // al reenderizar nuestra pagina web, estar'ia traduciendo estas
//     // etiquetas de JSX a HTML

//     // Este es un elemento que es renderizado por React, cuyo cambio
//     // se lo ve reflejado en la pagina web que estamos creando
//     <div className="App">
//       <header className="App-header">
//         {/* Podemos introducir una variable en 'src' en lugar
//         del link completo en JSX*/}
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           Este es el inicio verdadero para el aprendizaje de un
//           super poder llamado Reactjs
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* forma 1 de usar un parametro */}
//           {/* {propiedad.primerParametro} */}

//           {/* forma 2 de usar un parametro */}
//           {propiedad.children}
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
