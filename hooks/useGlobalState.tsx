import { useState } from "@hookstate/core";
import { globalState } from "state/globalState";

export const useGlobalState = () => {
  const state = useState(globalState);

  return state;
};
