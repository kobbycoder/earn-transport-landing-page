import React from "react";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function SectionOne() {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <div className="w-full h-screen ">
        <div className="flex w-full h-1/2">
          <div className="w-1/2 h-full overflow-hidden">
            <Image
              src="/images/signIn.png"
              width={1000}
              height={500}
              alt="plus"
              className="h-full w-full object-none object-top"
              priority={true}
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center space-y-5">
            <div className="uppercase text-white py-4 bg-main-light rounded-3xl w-2/5 text-center font-bold">
              <p className="text-sm">did you know you could</p>
            </div>
            <div className="w-3/5">
              <h1 className="text-main text-5xl">
                Get matched to a driver in less than{" "}
                <span className="font-bold">30 secs</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full h-1/2">
          <div className="bg-main-light w-1/2 flex justify-center items-center py-14 px-40">
            <div className="bg-confetti bg-white bg-contain bg-no-repeat bg-center w-full h-full flex justify-center items-center">
                <div className="bg-main rounded-full w-20 h-20">
                    <PlusIcon />
                </div>
            </div>
          </div>
          <div className="bg-main w-1/2 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center space-y-5">
            <div className="text-white w-3/6 text-left text-4xl">
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
