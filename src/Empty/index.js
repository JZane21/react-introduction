import React from 'react';
import './Empty.css'

function Empty({vacio}){
    return (
        <section className="EmptyTarea-container">
            <p className="EmptyTarea-text">{vacio}</p>
            <section className="EmptySection">
                <span className="EmptyTareaIcon"></span>
                <span className="EmptyTareaIcon"></span>
                <span className="EmptyTareaIcon"></span>
            </section>
        </section>
    );
}

export { Empty };