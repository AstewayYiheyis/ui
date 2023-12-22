import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/Signin/SignIn";
import {TrackingPage} from "./pages/TrackingPage/TrackingPage";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import ShipPackage from "./pages/ShipPackage/ShipPackage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/track" element={<TrackingPage />} />
        <Route path="/ship" element={<ShipPackage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
