import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will smith", img: expert1 },
  { id: 2, name: "Chris Rock", img: expert2 },
  { id: 3, name: "Dwayn Rock", img: expert3 },
  { id: 4, name: "Massy vai", img: expert4 },
  { id: 5, name: "Neimar Jr", img: expert5 },
  { id: 6, name: "Neimar Jr", img: expert6 },
];
const Experts = () => {
  return (
    <div id="expert" className="container">
      <div className="row">
        <h2>Our experts:{experts.length}</h2>
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
