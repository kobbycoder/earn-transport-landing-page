import React from "react";

export default function Hero() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 flex flex-col py-10 px-16 justify-center space-y-12">
        <h1 className="uppercase text-6xl text-main">
          SAVE UP to about
          <span className="font-bold"> 50% </span>on your first 5 rides.
        </h1>
        <div className="w-3/4">
        <p className="text-gray-500">
          You can create rides for yourself, family and friends. This app allows
          you to schedule a ride for a specific date on your calendar.{" "}
        </p>
        </div>
        <a href="" className="bg-main py-3 text-white rounded-3xl w-1/5 text-xs font-bold text-center">
            CREATE RIDE
        </a>
      </div>
      <div className="w-1/2 bg-hero-image bg-cover"></div>
    </div>
  );
}
