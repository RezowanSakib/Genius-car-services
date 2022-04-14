import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  return (
    <div className="App">
      <h2>welcome to detail {serviceID}</h2>
      <Link to="/cheakout">
        <button className="btn btn-primary">Cheack me out</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
