import './App.css';
import Statefull from "./components/Statefull"
import { Stateless } from "./components/Stateless"
import React from "react"

// he creado mi custom hook mi rimer custom hook
const useDaniela = (numero) => {
  const [variable, setTime] = React.useState(numero)
  React.useEffect(() => {
    console.log("diego me la pela");
  }, [variable]);
  return [variable, setTime];
}

function App() {
  const [varriablo, setmelo] = useDaniela(5);
  return (
    <div className="App">
      <header className="App-header">
        <Statefull name={setmelo} />
        <h1>{varriablo}</h1>
        <Stateless name={setmelo} />
      </header>
    </div>
  );
}

export default App;
