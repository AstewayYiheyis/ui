
function trackPackage(trackingNumber){
    const url = `http://localhost:8080/shipping?trackingNumber=${trackingNumber}`;

    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Returned Data: ", data)
            return data
        })
        .catch(err => console.log(err));
}
function shipPackage(shippedPackage){
    const url = 'http://localhost:8080/shipping/sendPackage';
    const options = {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(shippedPackage)
    };

    return fetch(url, options)
        .then((request) => request.json())
        .then(data => {
            return data;
        })
        .catch((err) => console.log(err));
}

export default function shipping_client(...args){
    switch (args[0]){
        case "trackPackage":
            return trackPackage(args[1]);
        case "shipPackage":
            return shipPackage(args[1]);
        default:
            console.error("The function you called doesn't exist in the ShippingClient class!");
    }
}