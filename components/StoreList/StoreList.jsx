import React from "react";
import classes from "./storeList.module.css";
import * as a from '../../public/Images/coming-soon.jpg'
import Image from "next/image";

function StoreList({ storeList }) {
  return (
    <section className={classes.main}>
     <h2 className="text-2xl">Our Stores</h2>
     <div className="flex flex-row w-full justify-around">
     {storeList.map((storeData, index) => {
        return (
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 py-2 mx-3 mb-4">
            <div
              key={index}
              className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
            >
              <Image
              width={500}
              height={500}
                src={storeData.url}
                alt="card-image"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {storeData.storeName}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {storeData.storeLocationAddress}
              </p>

              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {storeData.storeContactNo}
              </p>
            </div>
            {storeData.storeContactNo ? (
                <div className="p-6 pt-0">
              <a
                href={`tel:${storeData.storeContactNo}`}
                className="font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-lightBlue text-white shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800"
              >
                Contact Store
              </a>
            </div>) : (
                <div className="flex items-center justify-center p-4 animate-pulseGlow">
                <span className="inline-flex items-center px-4 py-2 text-sm font-bold text-black bg-primary rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Opening Soon!
                </span>
              </div>
            )}
          </div>
        );
      })}
     </div>
      
   </section>
  );
}

export default StoreList;
