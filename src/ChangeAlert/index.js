import React, { useEffect } from 'react'
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

const ChangeAlert= (props) => {
    const show = props.show;
    const toggleShow = props.toggleShow;

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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }