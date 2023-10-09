import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
