import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Hero() {
  return (
    <>
    <div className="flex w-full min-h-screen">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 h-1/2 md:h-full md:py-10 p-4 md:px-16 flex flex-col justify-center items-center md:items-start space-y-10 bg-main sm:bg-white">
          <h1 className="uppercase text-4xl md:text-6xl text-white md:text-left sm:text-main text-center">
            SAVE UP to about
            <span className="font-bold"> 50% </span>on your first 5 rides.
          </h1>
          <div className="w-3/4 hidden sm:block ">
            <p className="text-gray-500 text-xs md:text-sm">
              You can create rides for yourself, family and friends. This app
              allows you to schedule a ride for a specific date on your
              calendar.{" "}
            </p>
          </div>
          <a
            href=""
            className="bg-main py-3 text-white rounded-3xl px-6 text-xs font-bold text-center hidden sm:block"
          >
            CREATE RIDE
          </a>
        </div>
        <div className=" bg-hero-image bg-cover md:w-1/2 h-1/2 md:h-full"></div>
      </div>
    </div>
    <SectionOne />
    <SectionTwo />
    </>
  );
}
