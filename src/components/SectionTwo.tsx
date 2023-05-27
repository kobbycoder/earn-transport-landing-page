import React from "react";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full h-screen">
        <div className="flex flex-col md:flex-row w-full h-2/3 bg-red-500">
            <div className="w-full flex flex-col-reverse md:flex-row h-full">
              <div className="bg-orange-500 md:w-1/2 w-full h-1/2 md:h-full">
                Hello
              </div>
              <div className="bg-black md:w-1/2 w-full h-1/2 md:h-full">
                Hello
              </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-1/3 bg-main">
            <div>
              <h1>Ready to Ride?</h1>
              <p>Or <span className="underline"><a href="">sign up</a></span> to start driving</p>
              <div className="flex space-x-5 w-full">
            <div className="bg-black p-3 w-1/2 rounded-xl flex items-center">
              <a href="">
                <div className="w-full flex justify-center items-center space-x-2">
                  <div>
                    <Image
                      src="/images/appstore.png"
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-12 w-12"
                      priority={true}
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-xs">GET ON</p>
                    <h1 className="text-xs">App Store</h1>
                  </div>
                </div>
              </a>
            </div>
            <div className="bg-black p-3 w-1/2 rounded-xl flex items-center">
              <a href="">
                <div className="w-full flex justify-center items-center space-x-4">
                  <div>
                    <Image
                      src="/images/playstore.png"
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-auto w-auto"
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
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}
