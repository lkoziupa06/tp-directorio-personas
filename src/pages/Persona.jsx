import { useParams } from 'react-router-dom';
import personas from '../Personas.js'
import { CardPersona } from '../components/cardPersona.jsx';
export default function Persona(){
    const { id } = useParams();
    const persona = personas[id-1];
    return(
        <>
            <div className='title-container'>
                <h1 className='title'>Datos de la persona</h1>
            </div>  
            <div className='container-persona'>
                <CardPersona nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} email={persona.email}/>
            </div>
        </>
    )
}