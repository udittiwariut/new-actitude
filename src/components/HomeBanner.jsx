import React from "react";
import banner1 from "../assets/sliderhero/bannertop.png";
//import dd from '../assets/sliderhero'
import { Carousel, Typography, Button } from "@material-tailwind/react";

const HomeBanner = () => {
  return (
    <>
      <Carousel className="main-banner" id="main-banner" autoplay>
        <div className="relative h-full w-full">
          <img
            src={banner1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center ">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-64">
              <Typography variant="h6" className="mb-4">
                There are so many opportunities <br />
                to do good in this world...
              </Typography>
              <Typography variant="h1" color="white" className="mb-4 ">
                What difference do <br /> <span className="overrife">you</span>{" "}
                want to make?
              </Typography>
              <Typography variant="lead" color="white" className="mb-8 mt-16">
                You want to do good. <br />
                Let’s help you succeed.
              </Typography>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="takeover"
                >
                  TAKE THE NEXT STEP
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={banner1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center ">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-64">
              <Typography variant="h6" className="mb-4">
                There are so many opportunities <br />
                to do good in this world...
              </Typography>
              <Typography variant="h1" color="white" className="mb-4 ">
                What difference do <br /> <span className="overrife">you</span>{" "}
                want to make?
              </Typography>
              <Typography variant="lead" color="white" className="mb-8 mt-16">
                You want to do good. <br />
                Let’s help you succeed.
              </Typography>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="takeover"
                >
                  TAKE THE NEXT STEP
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src={banner1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center ">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-64">
              <Typography variant="h6" className="mb-4">
                There are so many opportunities <br />
                to do good in this world...
              </Typography>
              <Typography variant="h1" color="white" className="mb-4 ">
                What difference do <br /> <span className="overrife">you</span>{" "}
                want to make?
              </Typography>
              <Typography variant="lead" color="white" className="mb-8 mt-16">
                You want to do good. <br />
                Let’s help you succeed.
              </Typography>
              <div className="flex gap-2">
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="takeover"
                >
                  TAKE THE NEXT STEP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeBanner;
