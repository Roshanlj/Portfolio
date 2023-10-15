import React from "react";

export default function Projects() {
  return (
    <div className="h-screen bg-[#292929] grid grid-rows-2 gap-0">
      <div className="group">
        <div className="absolute w-full text-[#FFD9D0] font-inknut text-[150px] items-center">
          MUSICO
        </div>
        <div>
          <img src="musico.png" className="absolute w-[60%] h-[50%] right-0 group-hover:opacity-40" />
        </div>
      </div>
      <div className="group">
      <div className="absolute w-full text-[#FFD9D0] font-inknut text-[150px] items-center">
          REACTIN
        </div>
        <div>
          <img src="reactin.png" className="absolute w-[60%] h-[50%] right-0 group-hover:opacity-40" />
        </div>
      </div>
    </div>
  );
}
