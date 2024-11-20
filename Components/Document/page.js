
import React from "react";
import { certificate } from "../../app/Constant/index";
import PropTypes from "prop-types";
import Image from "next/image";
import img1 from "../../public/images/logo.png";


export const Certifcate = ({ certifcateitem }) => {
 


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-28 px-32 py-24">
       {certifcateitem.map((certifcateitems) => (
         <div className="card cursor-pointer col-span-2" key={certifcateitems.id}>
         <div className="content">
           <div className="back">
             <div className="back-content">
               <Image
                 src={certifcateitems.img}
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
                 src={certifcateitems.img}
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
      ))}
    </div>
   
  );
};

Certifcate.propTypes = {
  certifcateitem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Page = () => {
  return (
    <>
      <section className="py-12 overflow-hidden">
      <div className="flex flex-row items-center justify-start gap-4">
          <Image src={img1} alt="Logo" className="rounded-md w-[200px]" />
          <h2 className="text-4xl font-bold font-serif text-gray-800">Documents</h2>
        </div>
        <Certifcate certifcateitem={certificate} />
      </section>
    </>
  );
};

export default Page;
