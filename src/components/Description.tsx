"use client";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { LiveIcon, TableIcon, UserIcon } from "@/icons/home";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import Countdown from "react-countdown";
// import "./styles/nprogress.css";

function Description() {
  const router = useRouter();
  const [routerButtonClicked, setRouterButtonClicked] = useState(false);
  NProgress.configure({ showSpinner: false });
  const day = new Date(2023,10,25) as any

  useEffect(() => {
    Aos.init({
      duration: 1500, 
    });
  }, []);

  useEffect(() => {
    console.log(routerButtonClicked);

    routerButtonClicked ? NProgress.start() : null;
  }, [routerButtonClicked]);
  return (
    <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Here are our heroes</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
      {/* <Countdown date={day} /> */}
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="./assets/img/team-1-800x800.jpg"
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: 120 }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Ryan Tompson</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Web Developer
              </p>
              <div className="mt-6">
                <button
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-dribbble" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="./assets/img/team-2-800x800.jpg"
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: 120 }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Romina Hadid</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Marketing Specialist
              </p>
              <div className="mt-6">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google" />
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="./assets/img/team-3-800x800.jpg"
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: 120 }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Alexa Smith</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                UI/UX Designer
              </p>
              <div className="mt-6">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google" />
                </button>
                <button
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src="./assets/img/team-4-470x470.png"
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: 120 }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Jenna Kardi</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Founder and CEO
              </p>
              <div className="mt-6">
                <button
                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-dribbble" />
                </button>
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google" />
                </button>
                <button
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Description;
