import {TextField, Button, Container} from "@mui/material";
import "./TrackingPage.css";

export function TrackingPage(props){
    return <div id="tracking-page">
        <div id="tracking-box">
            <h2>Please Enter The Tracking Number Below:</h2>
            <div className="flex-container">
                <TextField id="tracking-number" label="Tracking Number" variant="standard" />
                <Button variant="contained">Track</Button>
            </div>
        </div>
    </div>;
}