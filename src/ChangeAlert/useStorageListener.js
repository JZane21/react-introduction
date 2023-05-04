import React from 'react'

export const useStorageListener = (sincronize) => {
    const [storageChange,setStorageChange] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('storage', (change) => {
            if(change.key === 'TAREAS_V1'){
                console.log('HUBO CAMBIOS EN TAREAS_V1');
                setStorageChange(true);
            }
        });
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };

    return {
        show:storageChange,
        toggleShow
    };

};
