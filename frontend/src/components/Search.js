import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap";
 const  Search = (props)=> {
const [searchText,updateSearch]=useState("")


 const submitHandler = (e )=> {
    e.preventDefault();
    props.searchUsers(searchText);
    updateSearch("");
  };

    return (
      <div>
          <Form onSubmit={submitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => updateSearch(e.target.value)}
          />
         <Button style={{ marginLeft:'10px'}} type="submit" variant="primary">
          Search
        </Button>
        </Form>
      </div>
    );
  
}
export default Search;