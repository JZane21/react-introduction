import React from 'react';
import './Error.css'

function Error({error}){
    return (
        <section className="ErrorTarea-container">
            <p className="ErrorTarea-text">{error}</p>
            <section className="ErrorSection">
                <span className="ErrorTareaIcon"></span>
                <span className="ErrorTareaIcon"></span>
                <span className="ErrorTareaIcon"></span>
            </section>
        </section>
    );
}

export { Error };