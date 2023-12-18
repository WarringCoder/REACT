import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(props.piece);
  const [motivation, setMotiation] = useState(props.text)
  return (
    <div className="App">
      <p>Butona {count} kez tıklandı!</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.piece)}>Temizle</button>
      <input type="text" value={motivation} onChange={ (e) => setMotiation(e.target.value)} />
      <p>{motivation}</p>
      
    </div>
  );
}

export default App;
