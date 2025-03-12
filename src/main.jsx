import {createRoot} from "react-dom/client";
import App from "./components/App.jsx";
import {LocaleProvider} from "./contexts/LocaleContext";

createRoot(document.getElementById("root")).render(
  <LocaleProvider defaultValue="ko">
    <App />
  </LocaleProvider>
);
