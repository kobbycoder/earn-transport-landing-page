import React from "react";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-screen">
        <div className="flex flex-col md:flex-row w-full h-2/3">
          <div className="w-full flex flex-col-reverse md:flex-row h-full">
            <div className="md:w-1/2 w-full h-1/2 md:h-full flex justify-center">
              <div className="flex flex-col justify-center w-3/5 text-left space-y-5">
                <h1 className="text-main text-2xl md:text-5xl">
                  Seamlessly do more,
                  <span className="font-bold">Efficiently Earn more</span>
                </h1>
                <p className="text-gray-800 text-xs">
                  Earn up to GHS 1,500 as a driver using Earn Transport
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-1/2 md:h-full flex justify-center">
              <div className="md:w-1/2 w-full h-1/2 md:h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center md:w-full md:h-full">
                  <Image
                    src="/images/car.jpg"
                    width={1000}
                    height={50}
                    alt="plus"
                    className="h-auto w-auto"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-1/3 bg-main justify-center">
          <div className="flex flex-col justify-center items-center space-y-8">
            <h1 className="md:text-5xl text-xl font-bold">Ready to Ride?</h1>
            <div className="flex space-x-5 w-full justify-center">
              <a href="" className="bg-black rounded-md py-2 px-4">
                <div className="w-full flex justify-center items-center space-x-1">
                  <div>
                    <Image
                      src="/images/appstore.png"
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-8 w-8"
                      priority={true}
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-xs">GET ON</p>
                    <h1 className="text-xs">App Store</h1>
                  </div>
                </div>
              </a>
              <a href="" className="bg-black rounded-md py-2 px-4">
                <div className="w-full flex justify-center items-center space-x-1">
                  <div>
                    <Image
                      src="/images/playstore.png"
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-4 w-4"
                      priority={true}
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-xs">GET IT ON</p>
                    <h1 className="text-xs">Google Play</h1>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-xs">
              Or{" "}
              <span className="underline">
                <a href="">sign up</a>
              </span>{" "}
              to start driving
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
