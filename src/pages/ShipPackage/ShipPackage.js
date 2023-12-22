import {useState} from "react";
import PageHeader from "../../components/PageHeader";
import * as React from "react";
import './ShipPackage.css';
import ShippingClient from "../../common_util_functions/ShippingClient";


export default function ShipPackage() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [weight, setWeight] = useState(0);
    const [shippingType, setShippingType] = useState('');

    const handleSubmit = (event) => {
        const shippedPackage = {
            "productName" : productName,
            "productDescription" : productDescription,
            "customer": {
                "name": name,
                "email": email
            },
            "weight": weight,
            "shippingtype": shippingType
        };
        event.preventDefault();

        ShippingClient.shipPackage(shippedPackage);
        console.log("Shipped Package Final: ", shippedPackage);
    };

    return (
        <div className='main-container'>
            <PageHeader tabIndex = {1}/>
            <form onSubmit={handleSubmit}>
                <label>Product Name: </label>
                <br/>
                <input name="productName" type="text"
                       onChange={(e) =>
                           setProductName(e.target.value)}/>
                <br/>
                <label>Product Description: </label>
                <br/>
                <input name="productDesc" type="text"
                       onChange={(e) =>
                           setProductDescription(e.target.value)}/>
                <br/>
                <label>Customer Name: </label>
                <br/>
                <input name="name" type="text"
                       onChange={(e) =>
                           setName(e.target.value)}/>
                <br/>
                <label>Email: </label>
                <br/>
                <input name="email" type="text"
                       onChange={(e) =>
                           setEmail(e.target.value)}/>
                <br/>
                <label>Weight(KG): </label>
                <br/>
                <input name="weight" type="text"
                       onChange={(e) =>
                           setWeight(e.target.value)}/>
                <br/>
                <label for="shippmentType">Choose a Shipment Type:</label>
                <br/>
                <select id="shippmentType" name="shippmentType"
                        onChange={(e) =>
                            setShippingType(e.target.value.toUpperCase())}>
                    <option value="standard">STANDARD</option>
                    <option value="fragile">FRAGILE</option>
                    <option value="first_class">FIRST CLASS</option>
                </select>
                <br/>
                <input name="submit" type="submit"/>
            </form>
        </div>
    );
}