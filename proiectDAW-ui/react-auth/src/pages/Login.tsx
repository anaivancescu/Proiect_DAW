import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from "react-router-dom";

const Login = (props:{setName: (name:string)=>void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [redirect, setRedirect]= useState(false);
    const submit = async (e : SyntheticEvent) =>
    {
        e.preventDefault();

        const response= await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        setRedirect(true);
        props.setName(content.name);

    }
    if(redirect){
        return <Navigate to="/"/>
    }
    return (
        <form  className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required autoFocus
                   onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}/>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
}
export default Login;
