import { atomWithStorage } from "jotai/utils";
import {Theme as T, THEME_KEY} from "@/utils";
import {createStore} from "jotai";

const body = document.body;

export const store = createStore()
export const darkModeAtom = atomWithStorage(THEME_KEY, false);

const setLight = () => {
  body.classList.remove(T.dark);
  body.classList.add(T.light);
  body.removeAttribute("arco-theme");
};

const setDark = () => {
  body.classList.remove(T.light);
  body.classList.add(T.dark);
  body.setAttribute("arco-theme", T.dark);
};

store.sub(darkModeAtom, () => {
  const theme = store.get(darkModeAtom)
  theme ? setDark() : setLight()
})

export function useTheme () :[boolean ,() => void, (mod: boolean) => void] {
  const mod = store.get(darkModeAtom)
  return [
    mod,
    () => {
      store.set(darkModeAtom, !store.get(darkModeAtom))
    },
    (mod: boolean) => {
      store.set(darkModeAtom, mod)
    }
  ]
}