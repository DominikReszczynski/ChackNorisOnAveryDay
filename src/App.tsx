import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { NoPage } from "./pages/NoPages/NoPages.tsx";
import { Joke } from "./pages/Joke/joke generator/Joke";
import { Filmography } from "./pages/Filmography/Filmography.tsx";
import { About } from "./pages/About/Abaut.tsx";
import { Game } from "./pages/Game/Game.tsx";
import { Quiz } from "./pages/Quiz/Quiz.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/filmography" element={<Filmography />} />
            <Route path="/joke" element={<Joke />} />
            <Route path="/about" element={<About />} />
            <Route path="/game" element={<Game />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
