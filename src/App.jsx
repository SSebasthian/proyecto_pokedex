import { useState } from 'react';
import Contenido from './components/Contenido/Contenido';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="titulo">
          <h1>POKEDEX</h1>
          <hr />
      </div>
      <div>
        <Contenido />
      </div>
      <hr />
    </>
  )
}

export default App