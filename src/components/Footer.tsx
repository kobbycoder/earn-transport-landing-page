import React from "react";
import Image from "next/image";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const dateYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 text-gray-800">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:items-start items-center space-y-12">
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
        <div className="flex flex-col justify-center md:justify-normal text-center md:text-start mt-8 md:mt-0">
          <h1 className="font-bold text-sm">Earn Transport</h1>
          <div className="flex flex-col text-xs space-y-6 mt-5">
            <a href="">Rides</a>
            <a href="">E-Commerce</a>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal text-center md:text-start mt-8 md:mt-0">
          <h1 className="font-bold text-sm">Partner with Earn Transport</h1>
          <div className="flex flex-col text-xs space-y-6 mt-5">
            <a href="">Sign up as a driver</a>
            <a href="">Fleets</a>
            <a href="">Franchise</a>
            <a href="">Influencer</a>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-normal text-center md:text-start mt-8 md:mt-0">
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
        <div className="flex flex-col md:flex-row justify-between mt-12 px-8 lg:px-0">
          <div className="space-x-3 hidden md:flex justify-center items-center md:justify-normal">
            <a href="">
              <Image
                src="/images/facebook.png"
                width={1000}
                height={50}
                alt="plus"
                className="block h-4 w-4"
                priority={true}
              />
            </a>
            <a href="">
              <Image
                src="/images/instagram.png"
                width={1000}
                height={50}
                alt="plus"
                className="block h-4 w-4"
                priority={true}
              />
            </a>
            <a href="">
              <Image
                src="/images/twitter.png"
                width={1000}
                height={50}
                alt="plus"
                className="block h-4 w-4"
                priority={true}
              />
            </a>
            <a href="">
              <Image
                src="/images/linkedin.png"
                width={1000}
                height={50}
                alt="plus"
                className="block h-4 w-4"
                priority={true}
              />
            </a>
            <a href="">
              <Image
                src="/images/tiktok.png"
                width={1000}
                height={50}
                alt="plus"
                className="block h-4 w-4"
                priority={true}
              />
            </a>
          </div>
          <div className="text-xs space-x-4 hidden md:flex">
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
        <div className="md:hidden flex flex-col justify-center mt-5 px-5 space-y-5 mb-5">
          <h1 className="text-gray-300 text-xs">Request a ride</h1>
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
        <hr className="md:w-full md:h-1 h-1 w-5/6 mx-auto my-2 bg-gray-200 border-0 rounded md:my-5" />
        <div className="space-x-3 flex md:hidden justify-center md:justify-norma my-8">
          <a href="">
            <Image
              src="/images/facebook.png"
              width={1000}
              height={50}
              alt="plus"
              className="block h-4 w-4"
              priority={true}
            />
          </a>
          <a href="">
            <Image
              src="/images/instagram.png"
              width={1000}
              height={50}
              alt="plus"
              className="block h-4 w-4"
              priority={true}
            />
          </a>
          <a href="">
            <Image
              src="/images/twitter.png"
              width={1000}
              height={50}
              alt="plus"
              className="block h-4 w-4"
              priority={true}
            />
          </a>
          <a href="">
            <Image
              src="/images/linkedin.png"
              width={1000}
              height={50}
              alt="plus"
              className="block h-4 w-4"
              priority={true}
            />
          </a>
          <a href="">
            <Image
              src="/images/tiktok.png"
              width={1000}
              height={50}
              alt="plus"
              className="block h-4 w-4"
              priority={true}
            />
          </a>
        </div>
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between px-8 lg:px-0">
          <div className="text-xs text-center md:text-start">
            <p> © &nbsp; {dateYear} Earn Transport Technology v1.0.0</p>
          </div>
          <div className="text-xs space-x-5 text-center md:text-end">
            <a href="">Code of conduct</a>
            <a href="">Cookies</a>
            <a href="">Legal</a>
            <a href="">Security</a>
          </div>
        </div>
        <p className="text-center text-xs mt-10">
          Made with ❤️ by{" "}
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
