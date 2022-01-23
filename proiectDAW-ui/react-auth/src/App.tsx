import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
        <BrowserRouter>
            <Nav/>
                <main className="form-signin">
                    <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                            <Route path="/register" element={<Register/>}></Route>
                    </Routes>
                </main>
        </BrowserRouter>
  );
}

export default App;
