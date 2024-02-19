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
          <ul className="list-items">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/UseState">useState</Link>
            </li>
            <li className="nav-item">
              <Link to="/UseContext">useContext</Link>
            </li>
            <li className="nav-item">
              <Link to="/UseEffect">useEffect</Link>
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
