import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Joke } from "./joke generator/Joke";
import { Layout } from "./layout.js";
import { Home } from "./home.js";
import { NoPage } from "./NoPage.js";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="joke/*" element={<Joke />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
