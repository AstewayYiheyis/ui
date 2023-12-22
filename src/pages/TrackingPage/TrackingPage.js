import "./TrackingPage.css";
import {TrackingInputContainer} from "../../components/TrackingInputContainer/TrackingInputContainer";
import PageHeader from "../../components/PageHeader";
import * as React from "react";

export function TrackingPage(props){
    return (<div className='main-container'>
        <PageHeader tabIndex = {2}/>
        <div id="tracking-page">
            <div id="tracking-box">
                <h2>Please Enter The Tracking Number Below:</h2>
                <TrackingInputContainer/>
            </div>
        </div>
    </div>);
}