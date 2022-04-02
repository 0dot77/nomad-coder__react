import { useState } from "react";
import Hello from "./Hello.js";

function App() {
  const [showing, setShowing] = useState(false);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={() => setShowing((prev) => !prev)}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
