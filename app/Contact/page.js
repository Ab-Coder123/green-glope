import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Product from "../../Components/Product/page";
// import MapComponent from "../../Components/Map/page"; // تأكد من المسار
import imgabout from "../../public/images/2151064509.jpg";
import Image from "next/image";

function page() {
  return (
    <>
      <form action="https://fabform.io/f/xxxxx" className="py-20" method="post">
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <Image
                      src={imgabout}
                      alt="Description"
                      className=" rounded-md py-20 w-[500px]"
                    />
                    <h1 className="font-manrope text-[#385013] text-4xl font-bold leading-10 absolute top-11 left-11">
                      Contact us
                    </h1>
                    <div className="absolute -bottom-24 w-full lg:p-11 ">
                      <div className="bg-white rounded-lg p-6 block">
                        <a
                          href="javascript:;"
                          className="flex items-center mb-6"
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-[#385013] text-xl"
                          />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            470-601-1911
                          </h5>
                        </a>
                        <a
                          href="GreenGLop7@gmail.com"
                          className="flex items-center mb-6"
                        >
                          <FontAwesomeIcon
                            icon={faPhoneAlt}
                            className="text-[#385013] text-xl"
                          />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                          GreenGLop7@gmail.com                          </h5>
                        </a>
                        <a href="javascript:;" className="flex items-center">
                          <FontAwesomeIcon
                            icon={faLocation}
                            className="text-[#385013] text-xl"
                          />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            654 Sycamore Avenue, Meadowville, WA 76543
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-[#385013] font-manrope text-4xl font-semibold leading-10 mb-11">
                  Send Us A Message
                </h2>
                <input
                  type="text"
                  className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Phone"
                />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                    Preferred method of communication
                  </h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-[#385013] checked:bg-indigo-100"
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-[#385013] checked:bg-indigo-100"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                        Phone
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Message"
                />
                <button className="button w-40 h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-[#385013] bg-[#385013] shadow-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>

      <div className="my-12">
      </div>

      {/* عرض مكون Product هنا */}
      <Product />
    </>
  );
}

export default page;
