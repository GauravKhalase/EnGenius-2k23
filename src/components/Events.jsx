import React from "react";

const Events = () => {
  return (
    <div id="events">
      <div className="max-w-[80%] flex flex-col mx-auto py-10">
      <div className="text-[25px] font-extrabold px-2 py-8 ">
          EVENTS <span className="text-[15px] font-semibold ">ORGANISED</span>
        </div>
        <table class="table-auto">
          <tbody>
            <tr className="border-b-2 border-black">
              <td className="w-[110px] py-2 flex flex-col items-start">10:00 - 11:00</td>
              <td className="pl-2 py-2 ">Inauguration + Saraswati Poojan.</td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="w-[110px] py-2 flex flex-col items-start">11:00 - 12:00</td>
              <td className="pl-2 py-2">Expert's Talk + Skit/Act + Project Competition.</td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="w-[110px] py-2 flex flex-col items-start">12:00 - 01:00</td>
              <td className="pl-2 py-2">Lunch/Snacks Break.</td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="w-[110px] py-2 flex flex-col items-start">01:00 - 03:00</td>
              <td className="pl-2 py-2">
                Dancing Competition + Singing Competition + Photography
                Contest + Digital Treasure Hunt.
              </td>
            </tr>
            <tr>
              <td className="w-[110px] py-2 flex flex-col items-start">03:00 - 05:00</td>
              <td className="pl-2 py-2">Announcement of Winners of all Competitions.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
