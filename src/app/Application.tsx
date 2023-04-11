import { ThemeContext, defalueThemeValue } from "@/hooks/theme";
import Layout from "./loyout";
import Menu from "./menu/inedx";

export default function Application() {
  return (
    <>
      <ThemeContext.Provider value={defalueThemeValue}>
        <Layout aside={<Menu />}></Layout>
      </ThemeContext.Provider>
    </>
  );
}
