import React from "react";
import projects from "../assets/projects.png";

export default function Page6({ nextPage, prevPage }) {
  return (
    <div className="w-2/4 p-4 flex flex-col items-center gap-4 mt-8 md:text-lg md:w-fit">
      <div className="text-xl flex flex-col gap-8 leading-loose md:text-lg md:w-fit m-8">
        <p className="font-semibold text-4xl ">CONTRIBUTORS CHECKLIST</p>
        <ul className="list-disc">
          <li>JOIN DISCORD SERVER</li>
          <li>TAKE YOUR ROLE AND UPDATE YOUR NICKNAME</li>
          <li>
            CHECK PROJECT LIST AT <a href="./">WEBSITE</a> AND SELECT YOUR
            PROJECT ( YOU DON'T NEED TO FILL ANY APPLICATION)
          </li>
          <li>
            AFTER MENTORS GET ALLOTED TO PROJECT GET IN TOUCH WITH YOUR MENTOR
            AND THEN MENTOR WILL GUIDE YOU REST THINGS.
          </li>
          <li>
            YOU CAN SELECT AS MANY PROJECT YOU WANT JUST MAKE SURE YOU GIVE
            REQUIRED TIME TO EACH PROJECT
          </li>
        </ul>
      </div>
    </div>
  );
}
