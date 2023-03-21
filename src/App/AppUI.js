import React from "react";
import './App.css';
import { Counter } from '../Counter';
import { CreateButton } from '../CreateButton';
import { Search } from '../Search';
import { ItemList } from '../ItemList';
import { Item } from '../Item';
import { TareaContext } from '../TareaContext'
import { Modal } from "../Modal";
import { Form } from "../Form";
import { Error } from "../Error";
import { Loading } from "../Loading";
import { Empty } from "../Empty";

function AppUI(){
    const {
        error, 
        loading, 
        tareasBuscadas, 
        tareasHechas, 
        tareasEliminadas,
        tareasCanceladas,
        openModal, 
        setOpenModal,
        tareasTotales
    } = React.useContext(TareaContext);

    return (
        // instanciando una etiqueta invicible en React
        <React.Fragment>
        <section>
        <Counter/>

        {(!loading && tareasTotales!==0 && !error) && <Search/>}

        <ItemList>
            {error && <Error error={error} />}
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
            ))}
        </ItemList>

        {openModal && (
        <Modal>
            <Form/>
        </Modal>
        )}

        {(!loading && !error) && <CreateButton  
            openModal = {openModal}
            setOpenModal={setOpenModal}
        />}

        </section>
    </React.Fragment>
    );
}

export { AppUI };