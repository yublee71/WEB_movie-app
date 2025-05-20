import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./routes/Home";
import { Detail } from "./routes/Detail";

function App() {
  return (
    <BrowserRouter basename="/WEB_movie-app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
