import { createMachine } from "xstate";

export const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxAGa7EA2kA2gAYAuolAAHVLGIAXYqlKiQAD0QBaAIzqA7BQBMAFl3qAHFoCsAGhABPROoDMAX0dXmWPETKUadBk3SSrNy09KRQgiJIIBJSsvKKKggauroUZupmAGy6ljZq2pnOLiCk6HCKbjgEJOSKMTJyClGJqroAnLm2SbrZac6uAVWe5NQhfm7wUfVxTaAtBlpWXarGbX3FlR413iGQ-ix1kg3xzYiZZhQC+pmmnflahRuDW16jvmGYAKIATt+o34dYo0EogHks7E4ikA */
  createMachine({
    initial: "Loading Todos",
    id: "Todo Machine",
    states: {
      "Loading Todos": {
        on: {
          failed: "Loading Error",
          loading: "Loaded Todos",
        },
      },
      "Loaded Todos": {},
      "Loading Error": {},
    },
  });
