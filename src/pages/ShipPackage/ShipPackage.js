import {useState} from "react";
import PageHeader from "../../components/PageHeader";
import * as React from "react";
import './ShipPackage.css';


export default function ShipPackage() {
    const [shippedPackage, setShippedPackage] = useState(null);
    // const [productName, setProductName] = useState('');
    // const [productDescription, setProductDescription] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [weight, setWeight] = useState(0);
    // const [shippingType, setShippingType] = useState('');

    const handleChange = (event) => {
        setShippedPackage({...shippedPackage, "productName": event.target.value});
        debugger;
    }

    const handleSubmit = (event) => {

    };

    console.log("Shipped Package: ", shippedPackage);

    return (
        <div className='main-container'>
            <PageHeader tabIndex = {1}/>
            <form onSubmit={handleSubmit}>
                <label>Product Name: </label>
                <br/>
                <input name="productName" type="text" onChange={handleChange}/>
                <br/>
                <label>Product Description: </label>
                <br/>
                <input name="productDesc" type="text" onChange={handleChange}/>
                <br/>
            </form>
        </div>
    );
}