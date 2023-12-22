import {TextField, Button} from "@mui/material";
import "./TrackingInputContainer.css";
import {ShippingClient} from "../../common_util_functions/ShippingClient";
import {useState} from "react";

export function TrackingInputContainer(props){
    const [trackingNumber, setTrackingNumber] = useState(0);
    const [shippmentInformation, setShippmentInformation] = useState(null);

    function searchUsingTrackingNumber(event) {
        event.preventDefault();
        setShippmentInformation(ShippingClient.trackPackage(trackingNumber));
    }

    function handleChange(event){
        setTrackingNumber(event.target.value);
    }

    return(
        <div className="flex-container">
        <TextField id="tracking-number" label="Tracking Number" variant="standard" onChange={handleChange}/>
        <Button variant="contained" onClick={searchUsingTrackingNumber}>Track</Button>
        </div>
    );
}