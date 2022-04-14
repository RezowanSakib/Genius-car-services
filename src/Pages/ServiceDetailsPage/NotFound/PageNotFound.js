import React from "react";
import notFound from "../../../images/killer-404.png";
const PageNotFound = () => {
  return (
    <div>
      <img src={notFound} className='img-fluid' alt="" />
    </div>
  );
};

export default PageNotFound;
