import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import All from "./components/All";
import About from "./components/About";
import Work from "./components/Work";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar />
                <Routes>
                    <Route path="/portfolio" element={<Hero />}>
                        <Route path="/portfolio/all" element={<All />} />
                        <Route path="/portfolio/about" element={<About />} />
                        <Route path="/portfolio/work" element={<Work />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
