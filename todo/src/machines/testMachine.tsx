import { createMachine } from "xstate";

export const testMachine = createMachine({
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: "notHovered",
        },
      },
    },
  },
});
