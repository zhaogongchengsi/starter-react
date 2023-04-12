
import { Provider } from "jotai";
import Layout from "./loyout";
import Menu from "./menu/inedx";
import HeaderContent from './header/index'
import { themeStore } from  '@/store'

export default function Application() {

  return (
    <>
      <Provider store={themeStore}>
          <Layout aside={<Menu/>} header={<HeaderContent />} footer={undefined}>
              中间
          </Layout>
      </Provider>
    </>
  );
}
