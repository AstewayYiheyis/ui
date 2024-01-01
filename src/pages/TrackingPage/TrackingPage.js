import "./TrackingPage.css";
import {TrackingInputContainer} from "../../components/TrackingInputContainer/TrackingInputContainer";
import PageHeader from "../../components/PageHeader";
import * as React from "react";
import BoxBasic from "../../components/BoxBasic";
import {useState} from "react";

export function TrackingPage(props){
    const [data, setData] = useState(null);

    function setPackageData(packageData){
        setData(packageData)
        console.log("In Call Back: ", data);
    }

    return (<div className='main-container'>
        <PageHeader tabIndex = {2}/>
        <div id="tracking-page">
            <div id="tracking-box">
                <h2>Please Enter The Tracking Number Below:</h2>
                <TrackingInputContainer setPackageData={setPackageData}/>
                <BoxBasic data={data}/>
            </div>
        </div>
    </div>);
}