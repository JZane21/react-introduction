import React from "react";

function Header(
    {
        children
    }
){
    return (
        <header>
            {children}
        </header>
    );
}

export { Header }