"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const title = "ydarff present";
  const menu = ["Home", "Work", "About"];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-screen h-screen relative">
        {/* Border */}
        <div className="overflow-hidden absolute top-[20px] lg:w-[40%] w-[20%] right-[10px]">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute top-[20px] lg:w-[40%] w-[20%] left-[10px]">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute top-[10px]">
          <h1 className="font-cabinet text-lg">{title.toUpperCase()}</h1>
        </div>
        {/* desktop menu */}
        <div className="overflow-hidden absolute top-[13%] left-0 hidden lg:block">
          {menu.map((item, index) => (
            <h1 key={index} className="menu-item font-cabinet text-lg pb-5">
              {item.toUpperCase()}
            </h1>
          ))}
        </div>
        {/* end desktop menu */}

        {/* mobile menu  */}
        <div className="overflow-hidden absolute w-52 h-12 bottom-4 rounded-full backdrop-blur-sm flex flex-row justify-center items-center gap-2 lg:hidden">
          {menu.map((item, index) => (
            <h1 key={index} className="font-cabinetBold text-sm text-white">
              {item.toUpperCase()}
            </h1>
          ))}
        </div>
        {/* end mobile menu */}
        <div className="overflow-hidden absolute top-[20px] h-[8%] left-[10px] hidden lg:block">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute bottom-[17px] h-[52%] left-[10px] hidden lg:block">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        {/* border mobile right */}
        <div className="overflow-hidden absolute top-[20px] bottom-[20px] h-[95%] left-[10px] lg:hidden">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        {/* end border mobile right */}
        <div className="overflow-hidden absolute top-[20px] bottom-[20px] h-[95%] right-[8px]">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>

        <div className="overflow-hidden absolute bottom-[15px] w-[30%] left-[10px] hidden lg:block">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute bottom-[15px] w-[30%] right-[10px] hidden lg:block">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        {/* END Border */}
        <div className="flex flex-col items-center relative w-screen h-screen  lg:h-[750px] overflow-hidden">
          <motion.div
            initial={{
              y: 100,
              scale: 1.2,
            }}
            animate={{
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="absolute top-[20%] lg:top-[12%]"
          >
            <div className="overflow-hidden relative">
              <h1 className="font-hog leading-none text-[4rem] lg:text-[14rem] font-medium relative -z-40 ">Seifuku GIrl</h1>
              <div className="overflow-hidden absolute top-[80%] w-full -z-50">
                <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "5" }} />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="absolute top-[40%] left-[15%] lg:left-[35%] -z-10"
          >
            <motion.div
              initial={{ y: -100, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1, // delay before the second animation starts
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="overflow-hidden relative"
            >
              <h3 className="font-hog leading-none text-[2rem] font-medium random-text">コンピュータ</h3>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="absolute top-[38%] right-[15%] lg:right-[35%] -z-10"
          >
            <motion.div
              initial={{ y: 100, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1, // delay before the second animation starts
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="overflow-hidden relative"
            >
              <h3 className="font-hog leading-none text-[2rem] font-medium random-text">インターネット</h3>
            </motion.div>
          </motion.div>
          <div className="absolute top-[16%] overflow-hidden h-[660px] flex justify-end items-end">
            <motion.div
              initial={{
                scale: 1.1,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 1,
                  ease: [0.33, 1, 0.68, 1],
                },
              }}
              className="flex flex-col items-end justify-end relative"
            >
              <div className="circle w-full">
                <motion.div
                  animate={{
                    x: "-100%",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear",
                  }}
                  className="flex flex-row"
                >
                  <Image src="/cloud3.png" alt="cloud" width={500} height={500} />
                  <Image src="/cloud3.png" alt="cloud" width={500} height={500} />
                </motion.div>
              </div>
              <div className="-z-40">
                <Image src="/seifuku_edit.png" alt="seifuku_girl" width={420} height={420} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
