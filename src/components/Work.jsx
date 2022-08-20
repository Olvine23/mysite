import React from "react";

import "tw-elements";

const Work = () => {
  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#28c7fa]">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        <div className="relative px-4 py-16 mb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-[#0a192f] lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
              >
                <defs>
                  <pattern
                    id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-8 h-8 text-teal-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  The quick, brown fox jumps over a lazy dog
                </h6>
                <p className="text-sm text-[#28c7fa]">
                  Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                  Slugging catcher slide bench league.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2   text-white font-semibold leading-5">
                A flower in my garden, a mystery
              </h6>
              <p className="text-sm text-[#28c7fa]">
                They urge you to put down your sword and come join the winners.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-white  font-semibold leading-5">
                Skate ipsum dolor sit amet, alley oop
              </h6>
              <p className="text-sm text-[#28c7fa]">
                If one examines precultural libertarianism, one is faced with a
                choice: either accept rationalism.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                <svg
                  className="w-8 h-8 text-teal-900"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-white font-semibold leading-5">
                The first mate and his Skipper too will
              </h6>
              <p className="text-sm text-[#28c7fa]">
                Those options are already baked in with this model shoot me an
                email clear blue water.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

        {/* Container */}
        <div className=" ">
          {/* Grid Item */}
          <div
            id="carouselDarkVariant"
            class="carousel slide carousel-fade carousel-dark relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0  ">
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                aria-label="Slide 1"
              ></button>
            </div>

            <div class="carousel-inner relative w-full h-800 overflow-hidden">
              <div class="carousel-item active relative float-left  w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                  class="block h-56  sm:h-92  w-full"
                  alt="Motorbike Smoke"
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>

              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                  class="block h-56 sm:h-96 w-full"
                  alt="Mountaintop"
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>

              <div class="carousel-item relative h-90 float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                  class="block h-56 sm:h-96 w-full"
                  alt="Woman Reading a Book"
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
