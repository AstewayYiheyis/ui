import {TextField, Button} from "@mui/material";
import "./TrackingInputContainer.css";
import {useState} from "react";
import shipping_client from "../../common_util_functions/shipping_client";
import {apiCalls} from '../../common_util_functions/api_calls';
import * as React from "react";

export function TrackingInputContainer(props){
    const [trackingNumber, setTrackingNumber] = useState(0);

    function searchUsingTrackingNumber(event) {
        event.preventDefault();
        shipping_client(apiCalls[0], trackingNumber).then(data => {
            props.setPackageData(data);
        }
        );
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