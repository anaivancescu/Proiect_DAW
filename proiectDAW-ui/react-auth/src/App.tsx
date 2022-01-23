import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
    const [name, setName] = useState('')
    useEffect(()=>{(
        async () => {const response= await fetch("http://localhost:5000/api/user", {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
            const content= await response.json();

            setName(content.name)}

    ) ()
    })
  return (
        <BrowserRouter>
            <Nav name={name}/>
                <main className="form-signin">
                    <Routes>
                            <Route path="/home" element={<Home name={name}/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                            <Route path="/register" element={<Register />}></Route>
                    </Routes>
                </main>
        </BrowserRouter>
  );
}

export default App;
