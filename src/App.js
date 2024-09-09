import personas from './Personas.js';
import './App.css';
import { CardListado } from './components/CardListado.jsx';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Listado de Personas</h1>
      <div>
        {personas.map(persona => (
          <CardListado key={persona.id} persona={persona}/>
        ))}
      </div>
    </div>
  );
}

export default App;
