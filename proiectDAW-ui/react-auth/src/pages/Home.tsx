import React from 'react';

const Home = (props:{name:string}) => {

    return (

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Welcome to our peshop</h1>
                    <p className="lead fw-normal"></p>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                {props.name? 'hello ' + props.name : 'you are not logged in'}
            </div>

    )
}
export default Home;
