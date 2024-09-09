import { FaEnvelope, FaBirthdayCake } from 'react-icons/fa';
import '../App.css'
export const CardPersona = ({nombre, apellido, email, edad}) =>{
    return(
        <div className="card-individual">
            <h2>{nombre} {apellido}</h2>
            <div className="persona-info">
                <p><FaEnvelope className="icon" /> {email}</p>
                <p><FaBirthdayCake className="icon" /> {edad} años</p>
            </div>
        </div>
    )
}