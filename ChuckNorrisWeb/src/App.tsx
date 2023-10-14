import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { NoPage } from "./pages/NoPages/NoPages.tsx";
import { Joke } from "./pages/Joke/joke generator/Joke";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/joke" element={<Joke />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
