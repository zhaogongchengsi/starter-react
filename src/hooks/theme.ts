import { Theme as T, THEME_KEY } from "@/uitls";
import { createContext, useContext } from "react";

const theme = localStorage.getItem(THEME_KEY) || T.light;
const body = document.body;

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

darkThemeMq.addListener((e) => {
  if (e.matches) {
    setDark();
  } else {
    setLight();
  }
});

const setLight = () => {
  body.classList.remove(T.dark);
  body.removeAttribute("arco-theme");
  localStorage.setItem(THEME_KEY, T.dark);
};

const setDark = () => {
  body.classList.remove(T.dark);
  body.setAttribute("arco-theme", T.dark);
  localStorage.setItem(THEME_KEY, T.dark);
};

export const defalueThemeValue = {
  theme,
  setLight,
  setDark,
};

export const ThemeContext = createContext(defalueThemeValue);

export function useTheme() {
  return useContext(ThemeContext);
}
