import { useParams } from 'react-router-dom';
import personas from '../Personas.js'
import { CardPersona } from '../components/cardPersona.jsx';
export default function Persona(){
    const { id } = useParams();
    const persona = personas[id-1];
    return(
        <>  
            <div className='persona'>
                <CardPersona nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} email={persona.email}/>
            </div>
        </>
    )
}