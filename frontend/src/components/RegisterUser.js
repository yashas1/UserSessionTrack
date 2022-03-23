import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from'axios';
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
const RegisterUser=({ location})=>{
    const navigate = useNavigate();
         
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const redirect = location?.search ? location?.search.split("=")[1] : "/";
    const submitHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
          try{
          const { data } = await axios.post(
            "/api/users",
            { name, email, password},
            config
          );
          navigate("/");
          console.log(data)
          }
          catch(error){

            alert(error.response.data)
          }
      
      };



return(
    <FormContainer>
      <h1>Sign Up</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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
            onChange={(e) =>setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/?redirect=${redirect}` : "/"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
)

}

export default RegisterUser;