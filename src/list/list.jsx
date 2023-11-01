import ListView from './ListView';
import herramientas from './items';

//Componentes de presentacion y contenedores

function List(){
    return(
        <ListView elements={herramientas} />

    )
}

export default List;