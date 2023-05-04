import React from 'react'

export const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props){
    
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
        props.sincronize();
        setStorageChange(false);
    };

    return (
        <WrappedComponent
            show={storageChange}
            toggleShow={toggleShow}
        />
    );
  };
};
