"use client";
import React, { useState } from "react";
import CardMedia from "../../Components/CardMedia/page";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden" // إخفاء الشيك بوكس الافتراضي
      />
      <div
        className={`w-6 h-6 flex items-center justify-center border-2 border-[#7fcc2a]  rounded-lg transition-all duration-2 ${
          isChecked ? "bg-[#7fcc2a] border-[#7fcc2a]" : "bg-white"
        }`}
      >
        {isChecked && (
          <svg
            className="w-5 h-5 mb-2 mr-1 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="  24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

const Categories = () => (
  <div className="py-20">
    <h2 className="font-bold text-black">الفئات</h2>
    <ul className=" pt-3 cursor-pointer flex flex-col gap-y-3">
      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold">All Categories</li>
      </div>

      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold"> Category Name</li>
      </div>

      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold"> Category Name</li>
      </div>

      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold"> Category Name</li>
      </div>

      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold"> Category Name</li>
      </div>

      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold"> Category Name</li>
      </div>

      <div className="flex gap-4 ">
        <CustomCheckbox />
        <li className="text-[#385013]  font-bold"> Category Name</li>
      </div>
    </ul>
  </div>
);

const Availability = () => (
  <>
    <div className="py-5">
      <h2 className="font-bold text-black">المتاح</h2>
      <ul className=" pt-3 cursor-pointer flex flex-col gap-y-3">
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Selected</li>
        </div>

        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">In stock</li>{" "}
        </div>

        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Out of stock</li>{" "}
        </div>
      </ul>
    </div>
  </>
);

const Brands = () => (
  <>
    <div className="py-5">
      <h2 className="font-bold text-black">العلامات التجارية</h2>
      <ul className=" pt-3 cursor-pointer flex flex-col gap-y-3">
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>{" "}
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>{" "}
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>{" "}
        <div className="flex gap-4 ">
          <CustomCheckbox />
          <li className="text-[#385013]  font-bold">Brand Name</li>{" "}
        </div>
      </ul>
    </div>
  </>
);

const Filterproduct = () => {
  return (
    <>
      <section className="py-12">
        <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12  lg:gap-2">
          <div className="flex flex-col col-span-2  items-start ">
            <Categories />
            <div className="pr-3 bg-gray-4 h-1"></div>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
            <div className="w-96 lg:w-[80%] cols-span-8 ">
              <CardMedia />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Filterproduct;
