import React from "react";
import './ItemList.css';

function ItemList(propiedad){
    return(
        <section>
            <ul className="Lista">
                {propiedad.children}
            </ul>
        </section>
    );
}

export { ItemList };