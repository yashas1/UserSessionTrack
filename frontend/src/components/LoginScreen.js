import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import FormContainer from "./FormContainer";
import axios from "axios"

const LoginScreen=({ location, history })=>{

  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ipaddress, setIpaddress] = useState("");
    const [userData,setUserData] = useState("")
    const redirect = location?.search ? location?.search.split("=")[1] : "/home";
    


    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIpaddress(res.data.IPv4)
      }      
    useEffect( () => {
        getData()
      }, [])
      useEffect(() => {
        if (userData) {
          navigate("/home");
        }

      }, [userData, redirect]);
    const submitHandler = async(e) => {
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try{
          const { data } = await axios.post(
            "/api/users/login",
            {email, password, ipaddress},
            config
          );setUserData(data)
        }
       catch(error){
         console.log(error.response.data)
         alert(error.response.data)
       }
      };


return(
<>
<FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button  type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={ redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>

</>

)

}

export default LoginScreen;