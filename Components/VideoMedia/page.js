import React from "react";
import { mediavideo } from "../../app/Constant/index";
import PropTypes from "prop-types";

export const Carddatavideo = ({ cardsvideo }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-11 gap-24 px-32 py-24">
        {cardsvideo.map((carditem) => {
          return (
            /* From Uiverse.io by ElSombrero2 */
            <div className="card cursor-pointer col-span-3" key={carditem.id}>
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <video
                      className=" w-80 md:w-80 lg:w-full"
                      controls={false}
                      autoPlay
                      loop
                      muted
                    >
                       <source src="/images/Untitled design.mp4" type="video/mp4" />

                    </video>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
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

Carddatavideo.propTypes = {
  cardsvideo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Page = () => {
  return (
    <div>
      <Carddatavideo cardsvideo={mediavideo} />
    </div>
  );
};

export default Page;
