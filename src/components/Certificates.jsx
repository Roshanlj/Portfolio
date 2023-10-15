import React from "react";

export default function Certificates() {
  return (
    <div className="bg-[#B5A3A3] w-full h-screen">
      <div className="absolute text-[#532323] w-full flex justify-center">
        <div className="absolute top-16 font-inria font-semibold text-[30px]">
          "Learning Today, Achieving Tomorrow's Goals."
        </div>
        <div className="absolute h-screen w-full flex justify-center items-center">
          <div className="font-inknut text-[#644F4B] text-[145px]">
            CERTIFICATES
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center w-full h-fit">
        <div className="absolute top-36 grid grid-cols-3 gap-14">
          <img src="0001.jpg" className="w-[247.5px] h-[191.25px]" />
          <img src="0002.jpg" className="w-[247.5px] h-[191.25px]" />
          <img src="0003.jpg" className="w-[247.5px] h-[191.25px]" />
          <img src="0004.jpg" className="w-[247.5px] h-[191.25px]" />
          <img src="0005.jpg" className="w-[247.5px] h-[191.25px]" />
          <img src="0006.jpg" className="w-[247.5px] h-[191.25px]" />
        </div>
      </div>
      <div className="absolute w-full h-screen">
        <div className="text-[#000000] absolute w-full flex justify-center bottom-20 text-[14px] font-extralight font-inria">
          Contact Me
        </div>
        <div className="w-full flex justify-center">
        <img src="pointer.svg" className="absolute bottom-8 w-3 h-10" />
      </div>
      </div>
    </div>
  );
}
