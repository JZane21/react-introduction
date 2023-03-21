import React from 'react';
import './Loading.css';

function Loading({loading}){
    return (
        <section className="LoadingTarea-container">
            <p className="LoadingTarea-text">{loading}</p>
            <section className="LoadingSection">
                <span className="LoadingTareaIcon"></span>
                <span className="LoadingTareaIcon"></span>
                <span className="LoadingTareaIcon"></span>
            </section>
        </section>
    );
}

export { Loading };