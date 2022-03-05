import {React,useState} from 'react'
import './Sales/Sales.css'

  
function Product() {
    const [products] = useState([
        {
          id: 1,
          image: "f1.jpg",
          name: "Maththi",
          price: "₹ 100",
          description: "Fresh Sathanam",
        }, {
            id: 2,
            image: "f1.jpg",
            name: "Maththi",
            price: "₹ 100",
            description: "Fresh Sathanam",
          }, {
            id: 3,
            image: "f1.jpg",
            name: "Maththi",
            price: "₹ 100",
            description: "Fresh Sathanam",
          }, {
            id: 4,
            image: "f1.jpg",
            name: "Maththi",
            price: "₹ 100",
            description: "Fresh Sathanam",
          }, {
            id: 5,
            image: "f1.jpg",
            name: "Maththi",
            price: "₹ 100",
            description: "Fresh Sathanam",
          }, {
            id: 6,
            image: "f1.jpg",
            name: "Maththi",
            price: "₹ 100",
            description: "Fresh Sathanam",
          },{
            id: 7,
            image: "f1.jpg",
            name: "Maththi",
            price: "₹ 100",
            description: "Fresh Sathanam",
          },
      ]);
      const renderList = products.map((product) => {
        const { id, image, price, name, description } = product;
        return (
            <div className="card">
            <a href="/ProductView">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p className="price">{price}</p>
            <p>{description}</p>
            </a>
            </div>
        );
      });
      return <>{renderList}</>;
}

export default Product