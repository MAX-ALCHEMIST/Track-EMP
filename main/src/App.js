import './App.css';
import Register from './Pages/createAcc/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 console.log("h");
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/s" element={<Register/>}></Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
