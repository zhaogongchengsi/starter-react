import "./App.scss";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "jotai";
import { themeStore } from "@/store";
import routes from "~react-pages";
import AppLayout from "@/app/layout";


function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Provider store={themeStore}>
        <AppLayout aside={<div></div>} header={<header></header>}>
          {useRoutes(routes)}
        </AppLayout>
      </Provider>
    </Suspense>
  );
}

export default App;
