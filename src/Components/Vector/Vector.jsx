import React from "react";

export default function Vector() {
  const instgramVectors = [
    "/Images/instgram/Vector.svg",
    "/Images/instgram/Group.svg",
    "/Images/instgram/Group (1).svg",
    "/Images/instgram/mango-1.svg",
    "/Images/instgram/food.svg",
    "/Images/instgram/bookoff-corporation-logo.svg",
  ];
  return (
    <>
      <section className="vector ">
        <div className=" vector row m-2 ">
          {instgramVectors.map((src, index) => (
            <div className="col-md-2" key={index}>
              <img src={src} alt={`vector-${index}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
