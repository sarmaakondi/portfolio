import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import All from "./components/All";
// import About from "./components/About";
// import Work from "./components/Work";
import "./App.css";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const All = lazy(() => import("./components/All"));
const About = lazy(() => import("./components/About"));
const Work = lazy(() => import("./components/Work"));

function App() {
    return (
        <Router basename="/portfolio">
            <div className="app-container">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Hero />}>
                        <Route path="/all" element={<All />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<Work />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
