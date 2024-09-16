import personas from '../Personas.js'
import '../App.css'
import { FaUser, FaUserPlus, FaUserMinus } from 'react-icons/fa';

export default function Estadisticas() {
    const mayoresDe35 = personas.filter(persona => parseInt(persona.edad) > 35).length;

    const mayorEdad = Math.max(...personas.map(persona => parseInt(persona.edad)));
    const personasMayorEdad = personas
      .filter(persona => parseInt(persona.edad) === mayorEdad)
      .map(persona => persona.nombre);

    const menorEdad = Math.min(...personas.map(persona => parseInt(persona.edad)));
    const personasMenorEdad = personas
      .filter(persona => parseInt(persona.edad) === menorEdad)
      .map(persona => persona.nombre);
  
    return (
        <>
            <h2>Estadísticas</h2>
            <div className="estadisticas-container">
                <div className="stat-item">
                    <FaUserPlus className="icon" />
                    <p>Mayores de 35 años: {mayoresDe35}</p>
                </div>
                <div className="stat-item">
                    <FaUser className="icon" />
                    <p>Persona(s) de mayor edad: {personasMayorEdad.join(', ')}</p>
                </div>
                <div className="stat-item">
                    <FaUserMinus className="icon" />
                    <p>Persona(s) de menor edad: {personasMenorEdad.join(', ')}</p>
                </div>
            </div>
        </>
        
    );
  }