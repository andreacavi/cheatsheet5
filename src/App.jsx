import "./App.css";
import UseContextEl from "./components/UseContextEl";
import UseEffectEl from "./components/UseEffectEl";
import UseStateEl from "./components/UseStateEl";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/UseState">Use State</Link>
            </li>
            <li>
              <Link to="/UseContext">Use Context</Link>
            </li>
            <li>
              <Link to="/UseEffect">Use Effect</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UseState" element={<UseStateEl />} />
          <Route path="/UseContext" element={<UseContextEl />} />
          <Route path="/UseEffect" element={<UseEffectEl />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
