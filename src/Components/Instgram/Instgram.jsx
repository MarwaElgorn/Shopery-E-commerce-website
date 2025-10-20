import React from "react";

export default function Instgram() {
  const intgramImages = [
    "/Images/instgram/Instagram Post (1).svg",
    "/Images/instgram/Instagram Post (2).svg",
    "/Images/instgram/Instagram Post (4).svg",
    "/Images/instgram/Instagram Post (5).svg",
    "/Images/instgram/Instagram Post (6).svg",
    "/Images/instgram/Instagram Post (7).svg",
  ];

  return (
    <>
      <section className="instgram ">
        <div className="imges row">
          <h2 className="text-center fw-bold m-4">Follow us on Instagram</h2>
          {intgramImages.map((src, index) => (
            <div className="col-md-2" key={index}>
              <img src={src} alt={`post-${index}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
