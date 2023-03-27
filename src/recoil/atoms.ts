import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RocketType } from "../types/types";

const { persistAtom } = recoilPersist();

export const favouritesAtom = atom<RocketType[]>({
  key: "favouritesState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
