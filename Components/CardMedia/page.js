import Image from "next/image";
import React from "react";
import { mediaimg } from "../../app/Constant/index";
import PropTypes from "prop-types";

export const Carddata = ({ cards }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-11 gap-24 px-32 py-24">
        {cards.map((carditem) => {
          return (
            /* From Uiverse.io by ElSombrero2 */
            <div className="card cursor-pointer col-span-3" key={carditem.id}>
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <Image
                      src={carditem.img}
                      alt="any"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <Image
                      src={carditem.img}
                      alt="any"
                      className="z-0 img"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        filter: "blur(10px) brightness(0.7)", // جعل الصورة مشوشة وإضاءة منخفضة
                      }}
                    />
           
                  </div>

                  <div className="front-content">
                    <small className="badge">GreenGlope</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>Spaguetti Bolognese</strong>
                        </p>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

Carddata.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Page = () => {
  return (
    <div>
      <Carddata cards={mediaimg} />
    </div>
  );
};

export default Page;
