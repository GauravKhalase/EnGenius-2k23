import React from "react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-10">
        <div className="text-[25px] font-extrabold pb-5">
          2K22 - <span className="text-[15px] font-semibold ">EVENT</span> GALLERY
        </div>
        <div className="flex lg:flex-row sm:flex-col justify-center items-center gap-6 pb-5">
          <div className="w-[100%] flex flex-row justify-center items-center gap-6">
            <img className="w-[145px] h-[145px] rounded-2xl" src={one} alt="" />
            <img className="w-[145px] h-[145px] rounded-2xl" src={two} alt="" />
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <img
              className="w-[150px] h-[150px] rounded-2xl"
              src={three}
              alt=""
            />
            <img
              className="w-[150px] h-[150px] rounded-2xl"
              src={four}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
