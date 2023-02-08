import { useMachine } from "@xstate/react";
import { testMachine } from "./machines/testMachine";



function App() {
  const [state, send] = useMachine(testMachine)

  return (
    <div className="App">
      <p>React Xstate</p>
      <div>
        {JSON.stringify(state.value)}
      </div>
      <button
        onClick={ () => send("MOUSEOVER")}      
      >
        MOUSEOVER
      </button>
      <button
        onClick={ () => send("MOUSEOUT")}      
      >
        MOUSEOUT
      </button>
    </div>
  );
}

export default App;
