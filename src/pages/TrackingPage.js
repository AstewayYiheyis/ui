import "./TrackingPage.css";
import {TrackingInputContainer} from "../components/TrackingInputContainer";

export function TrackingPage(props){
    return <div id="tracking-page">
        <div id="tracking-box">
            <h2>Please Enter The Tracking Number Below:</h2>
            <TrackingInputContainer/>
        </div>
    </div>;
}