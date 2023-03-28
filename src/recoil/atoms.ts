import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RocketsType } from "../types/types";

const { persistAtom } = recoilPersist();

export const favouritesAtom = atom<RocketsType>({
  key: "favouritesState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
