import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
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
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Hero />}>
                            <Route path="/all" element={<All />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/work" element={<Work />} />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
