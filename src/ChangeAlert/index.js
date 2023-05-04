import React from 'react'
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

const ChangeAlert= (props) => {
    const sincronize = props.sincronize;
    const {show,toggleShow} = useStorageListener(sincronize);

    if(show){
        return (
        <section className='bloque-mensaje'>
            <section className='mensaje'>
                <h2>Hubo Cambios!</h2>
                <button
                    className='boton-recarga'
                    onClick={() => toggleShow(false)}
                >
                    Recargue la pagina
                </button>
            </section>
        </section>
        );
    }else{
        return <></>;
    }
};

export { ChangeAlert }