import React from 'react';

interface ProductCardProps {
    title :string;
    id: string;
    category: string;
    description: string;
    price:string;
}
const ProductCard = ({ title, id,category,description ,price}: ProductCardProps) => {

    return (

        <div className="position-relative text-center bg-light">
            <div className="album  bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm g-3 w-50 p-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"/>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Poza produs</text>
                                </svg>

                                <div className="card-body">
                                    <p className="card-text">{title}</p>
                                    <p className="card-text">{description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Add to favorites
                                            </button>
                                        </div>
                                        <small className="text-muted">{price} $</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductCard;
