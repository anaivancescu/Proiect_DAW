import React, {SyntheticEvent, useState} from 'react';
import {Navigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [redirect, setRedirect]= useState(false);
    const submit = async (e : SyntheticEvent) =>
    {
        e.preventDefault();
        await fetch("http://localhost:5000/api/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    name,
                    email,
                    password
            })
        });
        setRedirect(true);
    }
    if(redirect){
        return <Navigate to="/login"/>
    }
    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <input type="name" className="form-control" id="nameInput" placeholder="Username" required autoFocus/>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required autoFocus/>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    )
}
export default Register;
