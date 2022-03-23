import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import FormContainer from "./FormContainer";
import  Search  from "./Search";
import axios from "axios"
import { Link } from "react-router-dom";
const Home =({location})=>{
  const [userDetails, setuserDetails] = useState([]);
  const [searchData, setSearchData]=useState([]);
  const redirect = location?.search ? location?.search.split("=")[1] : "/";

const getUserData= async()=>{
   
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
     const userData= await axios.get("/api/users",config)  
     setuserDetails(userData.data);

     console.log(userDetails)
}
const searchUsers=( searchText)=>{
   console.log(searchText.length)
   if(searchText.length!=0)
   {
    let searchUser=userDetails.filter((data)=> data.name==searchText);
    if(searchUser.length==0)
    {
        alert("User Not Found")
    }
    setuserDetails(searchUser)
}
else{
    getUserData()

}

}

  useEffect( () => {
    getUserData()
  }, [setuserDetails])


  const displayList=()=>{
 console.log(userDetails)

  }

return(
    <>

    
     
           
       <Link to={ redirect ? `/?redirect=${redirect}` : "/"}>
       Go Back
          </Link>
          
<FormContainer>
 
<div> User Deatils </div>

<Search searchUsers={searchUsers}/>
    
     {
userDetails.map((user)=>
<ul >
<Card style={{ width: '22rem',margin:'20px'}}>

  <Card.Body>
    <li key={user._id}> <p>Name: {user.name} </p></li>
    <li ><p>Email: {user.email} </p></li>
    <li><p>Ip Address: {user.ipdata}</p></li>
    <li><p>Last logged at: {user.loggedAt}</p></li>
  </Card.Body>
</Card>

</ul> 
)
 }   
   
    </FormContainer>
    </>



)



}


export default Home;