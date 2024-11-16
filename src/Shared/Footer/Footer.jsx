import React from "react";
import { IoCall } from "react-icons/io5";
import { FaTruck } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <>
      {/* .............footer top part */}
      <div className="container flex flex-col md:flex-row divide-x divide-white bg-white">
        <div className="bg-slate-200 md:w-1/3 px-3 py-3">
          <h1 className="border rounded-lg p-6 border-white">
            Follow us on Facebook
          </h1>
        </div>
        <div className="bg-slate-200 md:w-1/3 px-3 py-3 ">
          <div className="flex flex-col md:flex-row items-center space-x-7 text-gray-700 mb-4">
            <FaTruck className="w-14 h-14 rounded-full text-white bg-slate-500 p-3" />

            <div>
              <h1 className="text-2xl text-primary">
                Nationwide Home Delivery
              </h1>
              <span>
                You can get Door to Door Deilivery Servise <br /> from 64
                Distrits & any part of the country.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-7 text-primary mb-3">
            <IoCall className="w-14 h-14 rounded-full text-white bg-slate-500 p-3" />
            <div>
              <h1 className="text-2xl text-primary">Order via Phone Call</h1>
              <span>
                You can place an order with just a phone call <br /> at our
                hotline number 09639146636
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-7 text-primary mb-3">
            <MdOutlinePayment className="w-14 h-14 rounded-full text-white bg-slate-500 p-3" />

            <div>
              <h1 className="text-2xl text-primary">Flexible Payment Method</h1>
              <p>
                Our payment methods are Cash, Mobile <br /> banking (Bkash,
                Rocket, Nagad) and Bank <br /> transfer. We also provide Cash on
                Delivery <br /> (CoD) Service
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 md:w-1/3 px-3 py-3">
          <div
            className="mapswrapper"
            style={{ background: "#fff", position: "relative" }}
          >
            <iframe
              width="400"
              height="350"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Zoha%20Paharmacy&zoom=10&maptype=roadmap"
              style={{ border: 0, position: "relative", zIndex: 2 }}
              title="Zoha Pharmacy Location"
            ></iframe>
            <a
              href="https://www.taxuni.com/i9-form/"
              style={{
                color: "rgba(0,0,0,0)",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 0,
              }}
            >
              I9 Form
            </a>
          </div>
        </div>
      </div>

      {/* footer input mail section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between bg-slate-500">
        <div className="flex flex-col md:flex-row items-center space-x-4 py-3 px-3 text-primary">
          <span className="text-xl text-white">Newsletter</span>
          <div className="flex items-center border border-gray-300 rounded-md p-2 bg-slate-200">
            <input
              type="email"
              placeholder="Enter your Mail"
              className="outline-none flex-grow text-gray-700 bg-slate-100"
            />
            <a href="#">
              <IoIosArrowForward className="text-red text-white mr-2 rounded-full border bg-gray-500 w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-4 py-3 px-3 text-primary">
          <span className="flex items-center text-white text-xl ">
            Follow us
          </span>
          <div className="flex space-x-5 text-gray-300 ">
            <a href="#">
              <FaFacebookF className="hover:text-white h-6 w-6" />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-white h-6 w-6" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
