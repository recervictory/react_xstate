import { createMachine } from "xstate";

export const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxADa0SQDaADAF1EoAA6pYxAC7FUpYSAAeiALQBGAEwB2ADQgAnitUAOAGwBfM7uZY8RMpRp0GTdONYAzXMXa9B8sRLSsvJKCMqmFOoALOrGmgCsugYIqgDMFpYgpOhw8tY4BCTk-uJSMnJIiiqpxkkqWqkU8RZWrgV25NRcztbwlQFlwZWhylp8dWEAnHxNLSD5tkUOXJAuLCWB5SGIJvEUfFEmRgkTaprmmQuF9l1OpIwAogBOT6hPG4MVoKHnE2kZZiAA */
  createMachine(
    {
      predictableActionArguments: true,
      id: "Todo Machine",
      initial: "Loading Todos",
      schema: {
        events: {} as
          | { type: "loaded"; todos: string[] }
          | { type: "failed"; errorMessage: string },
      },
      tsTypes: {} as import("./todoMachine.typegen").Typegen0,
      states: {
        "Loading Todos": {
          on: {
            loaded: { target: "Loaded Todos", actions: "consolelogTodos" },
            failed: { target: "Loading Error" },
          },
        },
        "Loaded Todos": {},
        "Loading Error": {},
      },
    },
    {
      actions: {
        consolelogTodos: (context, event) => {
          alert(JSON.stringify(event));
        },
      },
    }
  );
