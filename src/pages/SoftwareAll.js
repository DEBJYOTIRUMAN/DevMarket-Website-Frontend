import Product from './Product';
import { useState, useEffect } from 'react';
import image1 from '../images/softwareall.jpg';
const SoftwareAll = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/products/specific/softwares')
            .then(response => response.json())
            .then(products => {
                setProducts(products);
            });
    }, []);

    return (
        <>
       <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
           
           
            </div>
            <h3 className="text-center my-4 fw-bold">Browse All Softwares</h3>
        <div className="container mb-4">
            <div className="row row-cols-auto gx-4 gy-4">
            {
               products.map(product => <div key={product._id} className="col mx-auto"><Product product={product}/></div>)
            }
  
            </div>
        </div>

    </>
    )
}

export default SoftwareAll
