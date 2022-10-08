import './App.css';
import Register from './Pages/createAcc/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/login/Login';

function App() {
 console.log("h");
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
