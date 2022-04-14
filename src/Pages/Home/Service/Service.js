import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./service.css";
const Service = (props) => {
  const {id, name, description, img, price } = props.service;
  const navigate=useNavigate()
  const navigateToServiceDetail=id=>{
navigate(`/service/${id}`)
  }
  return (
    
    <Card className="col-12">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h4>${price}</h4>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={()=>{navigateToServiceDetail(id)}}>Book {name}</Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
