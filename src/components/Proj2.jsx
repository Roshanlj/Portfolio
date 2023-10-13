import React from "react";

export default function Projects() {
  return (
    <div className="h-screen bg-[#292929] grid grid-rows-2 gap-0">
      <div>
        <div>
          <img
            src="attendnow.png"
            className="absolute w-[60%] h-[50%] right-0"
          />
        </div>
      </div>
      <div>
        <div className="absolute h-fit w-full flex justify-center">
          <button
            className="absolute top-20 bg-[#FFD9D0] font-inria font-semibold text-xl
                 w-44 h-14 text-[#424242] rounded-full"
          >
            More Projects
          </button>
          <div className="text-[#FFD9D0] absolute w-full flex justify-center top-56 text-[14px] font-extralight font-inria">
            Certificates
          </div>
          <div className="w-full flex justify-center">
            <img src="pointer.svg" className="absolute top-64 w-3 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
