import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import  LoginScreen from "./components/LoginScreen"
import RegisterUser from "./components/RegisterUser"
import Home from "./components/Home"
import "./bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
     <main className="py-5">
    <Container>
    <Routes >
      
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterUser/>} />
      <Route path="/home" element ={<Home/>}/>
    </Routes>
    </Container>
    </main>
  </BrowserRouter>
  );
}

export default App;
