import './App.css';
import Register from './Pages/createAcc/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/login/Login';
import Dashbord from './Pages/admindashbord/addemp.js/Dashbord';
import Addemp from './Pages/admindashbord/addemp.js/Addemp';
import Track from './Pages/admindashbord/addemp.js/Track';

function App() {
 console.log("h");
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashbord" element={<Dashbord/>}></Route>
          <Route path="/addemp" element={<Addemp/>}></Route>
          <Route path="/track" element={<Track/>}></Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
