import React from "react";
import Image from "next/image";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const dateYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 text-gray-800">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center space-y-12">
          <div>
            <Image
              src="/images/logo_blue.png"
              width={1000}
              height={50}
              alt="plus"
              className="block h-12 w-auto"
              priority={true}
            />
            <p className="text-main font-bold text-xs text-center">earn</p>
            <p className="text-main font-bold text-xs text-center">transport</p>
          </div>
          <div className="">
            <a href="">
              <div className="flex bg-gray-100 py-2 px-4 space-x-1 text-xs rounded-3xl items-center">
                <GlobeAmericasIcon className="text-black w-6 h-6" />
                <p className="font-bold">Browse</p>
              </div>
            </a>

            <a href="" className="">
              <div className="flex text-xs items-center space-x-1 bg-gray-100 py-2 px-4 rounded-3xl mt-4">
                <Image
                  src="/images/ghana.png"
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-6 w-6"
                  priority={true}
                />
                <p className="font-bold">Ghana</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal text-center mt-8 md:mt-0">
          <h1 className="font-bold text-sm">Earn Transport</h1>
          <div className="flex flex-col text-xs space-y-6 mt-5">
            <a href="">Rides</a>
            <a href="">E-Commerce</a>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal text-center mt-8 md:mt-0">
          <h1 className="font-bold text-sm">Partner with Earn Transport</h1>
          <div className="flex flex-col text-xs space-y-6 mt-5">
            <a href="">Sign up as a driver</a>
            <a href="">Fleets</a>
            <a href="">Franchise</a>
            <a href="">Influencer</a>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal text-center mt-8 md:mt-0">
          <h1 className="font-bold text-sm">Company</h1>
          <div className="flex flex-col text-xs space-y-6 mt-5">
            <a href="">About us</a>
            <a href="">Career</a>
            <a href="">Investors</a>
            <a href="">Subscription</a>
            <a href="">Blog</a>
            <a href="">Brand guidelines</a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between mt-12">
          <div className="flex space-x-3">
            <div className="bg-gray-100 p-1 rounded-full">
              <a href="">
                <Image
                  src="/images/facebook.png"
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-6 w-6"
                  priority={true}
                />
              </a>
            </div>
            <div className="bg-gray-100 p-1 rounded-full">
              <a href="">
                <Image
                  src="/images/instagram.png"
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-6 w-6"
                  priority={true}
                />
              </a>
            </div>
            <div className="bg-gray-100 p-1 rounded-full">
              <a href="">
                <Image
                  src="/images/twitter.png"
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-6 w-6"
                  priority={true}
                />
              </a>
            </div>
            <div className="bg-gray-100 p-1 rounded-full items-center flex justify-center">
              <a href="">
                <Image
                  src="/images/linkedin.png"
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-5 w-5"
                  priority={true}
                />
              </a>
            </div>
            <div className="bg-gray-100 p-1 rounded-full">
              <a href="">
                <Image
                  src="/images/tiktok.png"
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-6 w-6"
                  priority={true}
                />
              </a>
            </div>
          </div>
          <div className="flex text-xs space-x-4">
            <div className="py-2 px-5 bg-gray-100 rounded-3xl">
              <a href="">Get the app</a>
            </div>
            <div className="py-2 px-5 bg-gray-100 rounded-3xl">
              <a href="">Book a ride online</a>
            </div>
            <div className="py-2 px-5 bg-gray-100 rounded-3xl">
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </div>
        <hr className="md:w-full md:h-1 h-1 w-full mx-auto my-2 bg-gray-200 border-0 rounded md:my-5" />
        <div className="flex justify-between">
          <div className="text-xs">
            <p> © &nbsp; {dateYear} Earn Transport Technology v1.0.0</p>
          </div>
          <div className="text-xs space-x-5">
            <a href="">Code of conduct</a>
            <a href="">Cookies</a>
            <a href="">Legal</a>
            <a href="">Security</a>
          </div>
        </div>
        <p className="text-center text-xs mt-10">
          Made with ❤️ by {" "}
          <a
            href="https://kobbycoder.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main"
          >
            kobbycoder
          </a>
        </p>
      </div>
    </footer>
  );
}
