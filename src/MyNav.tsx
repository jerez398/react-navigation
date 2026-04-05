import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import MyForm from "./MyForm";

export default function MyNav() {

    return (
        <BrowserRouter basename="/react-navigation">
            <SetNav></SetNav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="form" element={<MyForm />} />
            </Routes>
        </BrowserRouter>
    )

};

function SetNav() {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <ul style={{
                display: "flex",
                justifyContent: "space-evenly",
                flex: 1
            }}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/form" >Form</Link></li>
            </ul>
        </nav>
    );
}