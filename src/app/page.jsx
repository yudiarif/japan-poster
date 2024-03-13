"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const title = "ydarff present";
  const menu = ["Home", "Work", "About"];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-full h-screen relative">
        {/* Border */}
        <div className="overflow-hidden absolute top-[20px] w-[40%] right-[10px]">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute top-[20px] w-[40%] left-[10px]">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute top-[10px]">
          <h1 className="font-cabinet text-lg">{title.toUpperCase()}</h1>
        </div>
        <div className="overflow-hidden absolute top-[13%] left-0">
          {menu.map((item, index) => (
            <h1 key={index} className="menu-item font-cabinet text-lg pb-5">
              {item.toUpperCase()}
            </h1>
          ))}
        </div>
        <div className="overflow-hidden absolute top-[20px] h-[8%] left-[10px]">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute bottom-[17px] h-[52%] left-[10px]">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute top-[20px] bottom-[20px] h-[95%] right-[8px]">
          <svg height="100%" width="3" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>

        <div className="overflow-hidden absolute bottom-[15px] w-[30%] left-[10px]">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        <div className="overflow-hidden absolute bottom-[15px] w-[30%] right-[10px]">
          <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "2" }} />
          </svg>
        </div>
        {/* END Border */}
        <div className="flex flex-col items-center relative w-[1230px] h-[750px] overflow-hidden">
          <motion.div
            initial={{
              top: "-30%",
            }}
            animate={{
              top: "12%",
              transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="absolute top-[12%]"
          >
            <div className="overflow-hidden relative">
              <h1 className="font-hog leading-none text-[14rem] font-medium relative -z-40 ">Seifuku GIrl</h1>
              <div className="overflow-hidden absolute top-[80%] w-full -z-50">
                <svg height="3" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: "black", strokeWidth: "5" }} />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              left: "40%",
              opacity: 0,
            }}
            animate={{
              left: "35%",
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="absolute top-[40%] left-[35%] -z-10"
          >
            <div className="overflow-hidden relative">
              <h3 className="font-hog leading-none text-[2rem] font-medium random-text">コンピュータ</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{
              right: "40%",
              opacity: 0,
            }}
            animate={{
              right: "33%",
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="absolute top-[38%] right-[33%] -z-10"
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
