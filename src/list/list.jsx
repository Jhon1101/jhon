import React from 'react';
import ListView from './ListView';
import herramientas from './items';

// Componentes de presentación y contenedores

function List() {
return (
    <ListView elements={herramientas} />
);
}

export default List;
