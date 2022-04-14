
import React from "react";
import { Card } from "react-bootstrap";

const Expert = (props) => {
  const { name, img } = props.expert;
  return (
    <div className="col-4">
      <Card >
        <Card.Img variant="top" src={img} className='img-fluid' />
        <Card.Body>
          <Card.Title>Name:{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button className="btn-lg bg-primary">Go some Where</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;
