import React from "react";
import './ItemList.css';
import '../Empty/Empty.css';

function ItemList(propiedad){
    const renderFunction = propiedad.children || propiedad.render;

    const emptySearchedTareasFunction = () => {
        return (
            <>
                {propiedad.onEmptySearchedTareas()}
                <p className="EmptyTarea-text">No hay resultados para {propiedad.searchValue}</p>
            </>
        );
    };

    return(
        <section  className="Lista-contanier">
            {propiedad.error && propiedad.onError()}
            {propiedad.loading && propiedad.onLoading()}

            {(!propiedad.loading && !propiedad.tareasTotales) && propiedad.onEmpty()}
            
            {
                (propiedad.tareasTotales!==0 && !propiedad.tareasBuscadas.length) &&
                emptySearchedTareasFunction()
            }

            {(!propiedad.loading && !propiedad.error) && propiedad.tareasBuscadas.map(renderFunction)}
        </section>
    );
}

export { ItemList };