import React from "react";

const PackagingProcedure = () => {
  return (
    <>
      <div className="counter-area pt-1 pb-5">
        <div className="container">
          <div className="section-title">
            <h2>Our Packaging Procedure</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img
                src="/img/procedure/pricing.webp"
                alt="Description of the image"
              />
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img
                src="/img/procedure/box-design.webp"
                alt="Description of the image"
              />
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img
                src="/img/procedure/packaging.webp"
                alt="Description of the image"
              />
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <img
                src="/img/procedure/shipment.webp"
                alt="Description of the image"
              />
            </div>
          </div>
        </div>

        <div className="shape-wrap">
          <div className="shape-1">
            <img src="/img/shape/counter-shape.png" alt="Image" />
          </div>
          <div className="shape-2">
            <img src="/img/shape/counter-shape.png" alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagingProcedure;
