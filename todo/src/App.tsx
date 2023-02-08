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
        onClick={ () => send({ type: "loaded",  todos: ["Finish React code"] })}      
      >
        Loading
      </button>
      <button
        onClick={ () => send({
          type: "failed",
          errorMessage: "Failed to load"
        })}      
      >
        Failed
      </button>
    </div>
  );
}

export default App;
