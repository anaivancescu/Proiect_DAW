import React from 'react';

const Home = (props:{name:string}) => {

    return (

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">{props.name? 'hello ' + props.name : 'you are not logged in'} ! Welcome to our shop</h1>

                    <a className="btn btn-outline-secondary" href="http://localhost:3000/products">Go to products</a>
                </div>

            </div>

    )
}
export default Home;
