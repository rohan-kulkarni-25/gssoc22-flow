import React from "react";
import congo from "./../assets/congo.gif";

export default function PAGE1({ nextPage, prevPage }) {
  return (
    <div className="w-2/4 p-4 flex flex-col items-center gap-4 md:text-lg md:w-fit">
      <div className="text-2xl flex flex-col gap-4 md:text-lg md:w-fit m-8">
        <p>HEY, Welcome to GSSOC 22 Flow Website.</p>
        <p>
          My Objective is to make you people familiar with how the program will
          be conducted and what you need to do as a contributor ( participant )
        </p>
        <p>First of all,Congratulations on getting selected as participant.</p>
        <img src={congo} className="h-96 w-fit" alt="" srcset="" />
      </div>
      {/* <button
        className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
        type="submit"
        onClick={nextPage}
      >
        LET'S GET STARTED
      </button> */}
    </div>
  );
}
