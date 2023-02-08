import { useMachine } from "@xstate/react";
import { todoMachine } from "./machines/todoMachine";



function App() {
  const [state, send] = useMachine(todoMachine)

  return (
    <div className="App">
      <p>React Xstate</p>
      <div>
        {JSON.stringify(state.value)}
      </div>
      <button
        onClick={ () => send("loading")}      
      >
        Loading
      </button>
      <button
        onClick={ () => send("failed")}      
      >
        Failed
      </button>
    </div>
  );
}

export default App;
