import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      {count} <button onClick={() => setCount(count + 1)}>setCount</button>{" "}
    </div>
  );
}

export default App;
