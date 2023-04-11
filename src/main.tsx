import ReactDOM from "react-dom/client";
import App from "./App";

import "./style";

(async function () {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
})();
