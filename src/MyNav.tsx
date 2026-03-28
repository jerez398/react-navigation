import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";

export default function MyNav() {

    return (
        <BrowserRouter>
            <SetNav></SetNav>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )

};

function SetNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}