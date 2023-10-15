import TextField from "@mui/material/TextField";
import "./TrackingPage.css";

export function TrackingPage(props){
    return <div id="tracking-page">
        <label>Please Enter The Tracking Number Below:</label>
        <TextField id="tracking-number" label="Tracking Number" variant="standard" />
    </div>;
}