import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import {TrackingPage} from "./pages/TrackingPage";
import {Home} from "./pages/Home";
import {NoPage} from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/track" element={<TrackingPage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
