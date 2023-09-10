import React from "react";

const Events = () => {
  return (
    <div id="events">
      <div className="max-w-[80%] flex flex-col mx-auto py-10">
        <div className="text-[25px] font-extrabold px-2 py-8 ">
          EVENTS <span className="text-[15px] font-semibold ">ORGANISED</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-row justify-center items-center gap-4">
            <div>10:00 - 11:00</div>
            <div>Something something</div>
          </div>
          <div className="h-[2px] w-[100%] bg-black"></div>

          <div className="flex flex-row justify-center items-center gap-4">
            <div>11:00 - 12:00</div>
            <div>Something something</div>
          </div>
          <div className="h-[2px] w-[100%] bg-black"></div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div>01:00 - 13:00</div>
            <div>Something something</div>
          </div>
          <div className="h-[2px] w-[100%] bg-black"></div>

          <div className="flex flex-row justify-center items-center gap-4">
            <div>13:00 - 15:00</div>
            <div>Something something</div>
          </div>
          <div className="h-[2px] w-[100%] bg-black"></div>

          <div className="flex flex-row justify-center items-center gap-4">
            <div>15:00 - 17:00</div>
            <div>Something something</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
