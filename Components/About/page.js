
import React from 'react';
import imgabout from "../../public/images/892.jpg";
import Image from "next/image";

const page = () => {
 
 
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6  p-8 py-40 bg-gray-100">
      {/* Image Section */}
      <div className=" col-span-4 lg:col-span-3 w-full mx-0 lg:mx-14 fade-up"    data-aos="fade-up" >
      <Image
            src={imgabout}
            alt="Description"
            className=" rounded-md w-[500px]"
          />
      </div>
      
      {/* Text Section */}
      <div className=" col-span-3  p-4 text-left  space-y-10">
        <h2 className="text-3xl font-bold mb-4 text-[#385013]">Feed and Agriculture</h2>
        <p className="text-gray-700 text-xl leading-relaxed">
          The field of feed and agriculture is one of the most essential sectors supporting the economy and meeting local and global demands.
          Through the application of advanced agricultural methods, we contribute to enhancing production quality and increasing crop yields. 
          Feed plays a crucial role in animal husbandry and improving livestock productivity.
        </p>
      </div>
    </section>
  );
}



export default page;
