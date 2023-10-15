import React from "react";

export default function Certificates() {
  const mail1 = "mailto:roshan.lj@somaiya.edu.com";
  const mail2 = "mailto:roshanjadhav669@gmail.com";
  return (
    <div className="bg-[#292929] absolute w-full h-[50vh] overflow-hidden">
        <div className="absolute w-full top-16 flex justify-center font-jacques text-[#FFD9D0] text-[30px]">
            Reach Out Using
        </div>
        <img src="bg.png"
        className="absolute top-40"/>
        <div className="absolute w-full bottom-16 flex justify-center font-JetBrains text-[#000000] text-[20px]">
        <a href={mail1}><div>roshan.lj@somaiya.edu</div></a>
        <div>&nbsp;||&nbsp;</div>
        <a href={mail2}><div>roshanjadhav669@gmail.com</div></a>
        </div>
        <div className="absolute w-full flex justify-center bottom-28">
        <a href='https://www.linkedin.com/in/roshanlj07/'>
        <img src='link-black.png'
        className='w-12 h-12'/>
        </a>
        </div>
        
    </div>
  );
}