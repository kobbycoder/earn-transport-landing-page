import React from "react";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function SectionOne() {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <div className="w-full h-screen ">
        <div className="flex flex-col-reverse md:flex-row w-full h-1/2">
          <div className="md:w-1/2 w-full h-full overflow-hidden">
            <Image
              src="/images/signIn.png"
              width={1000}
              height={500}
              alt="plus"
              className="h-full w-full md:object-none object-top object-cover md:object-contain"
              priority={true}
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:space-y-5">
          <div className="flex justify-center md:hidden sm:block">
              <a
                href=""
                className="bg-main py-3 text-white rounded-3xl px-6 text-xs font-bold text-center mt-10"
              >
                CREATE RIDE
              </a>
            </div>
            <div className="uppercase md:text-white py-4 text-gray-500  md:bg-main-light rounded-3xl w-2/5 text-center font-bold">
              <p className="text-xs md:text-sm">did you know you could</p>
            </div>
            <div className="w-3/5">
              <h1 className="text-main md:text-left text-xl md:text-5xl">
                Get matched to a driver in less than{" "}
                <span className="font-bold">30 secs</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-1/2">
          <div className="bg-main-light md:w-1/2 w-full h-full py-6 px-16 flex justify-center items-center md:py-14 md:px-40">
            <div className="bg-confetti bg-center bg-white bg-contain bg-no-repeat md:bg-center w-full h-full flex justify-center items-center">
              <div className="bg-main rounded-full w-6 h-6 md:w-20 md:h-20">
                <PlusIcon />
              </div>
            </div>
          </div>
          <div className="bg-main md:w-1/2 w-full flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center space-y-5 p-3 md:p-0">
              <div className="text-white w-3/6 text-left text-2xl md:text-4xl">
                <h1 className="">Create a ride with just a tap</h1>
              </div>
              <div className="w-3/6 text-left text-xs">
                <p className="text-white">
                  Create a ride by just clicking on the create ride button to
                  create a ride with ease. No more delays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
