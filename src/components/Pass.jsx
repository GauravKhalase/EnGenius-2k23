import React from "react";

const Pass = () => {
  return (
    <div className="bg-[#f8f8f8]" id="pass">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-12">
        <div className="text-[25px] font-extrabold ">
          <span className="text-[15px] font-semibold ">BE</span> A PART <span className="text-[15px] font-semibold ">OF THIS</span>
        </div>
        <div className="text-[25px] font-extrabold pb-4 ">EXCITING EVENT</div>
        <div className="text-[12px] text-center leading-4 tracking-wider pb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          eaque et quaerat, possimus distinctio nulla veritatis molestiae magni
          est sit qui minus maiores. Consectetur, voluptate eveniet! Nam modi
          mollitia voluptate sed, veritatis commodi ratione magnam blanditiis
          provident temporibus id odit minus architecto, laudantium quia ab
          repellat at adipisci nesciunt facilis.
        </div>
        <button className="text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-5 py-2">
          BUY THE PASS NOW
        </button>
      </div>
    </div>
  );
};

export default Pass;
