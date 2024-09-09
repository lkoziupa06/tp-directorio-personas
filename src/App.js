import personas from './Personas.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Listado de Personas</h1>
      <ul>
        {personas.map(persona => (
          <li key={persona.id}>
            {persona.nombre} {persona.apellido} - {persona.email} - {persona.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
