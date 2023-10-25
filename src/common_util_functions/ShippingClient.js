import {useState} from "react";

export function ShippingClient(){
    const [data, setData] = useState(null);
    function trackPackage(trackingNumber){
        const url = `http:localhost:8080/shipping?trackingNumber${trackingNumber}`;

        fetch(url, trackingNumber)
            .then(data => setData(data.json())
            )
            .catch(err => console.log(err));


        return data;
    }
}