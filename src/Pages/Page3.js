import React from "react";

export default function Page3({ nextPage, prevPage }) {
  return (
    <div className="w-2/4 p-4 flex flex-col items-center gap-4 mt-8 md:text-lg md:w-fit">
      <div className="text-2xl flex flex-col gap-8 leading-loose md:text-lg md:w-fit m-8">
        <p className="font-semibold text-4xl ">MENTOR ALLOCATION</p>
        <p>
          Personal mentors will not be allocated to you.Mentors are allocated
          for a particular project according to thier skills.
        </p>
        <p>
          Mentors will help you in setting up the project on your system. Once
          the mentors are allocated you will be informed on discord channel and
          then you can get connected with them on discord or their socials which
          will be provided.
        </p>
      </div>
      {/* <button
        className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
        type="submit"
        onClick={nextPage}
      >
        WHERE CAN I FIND LIST OF PROJECTS ?
      </button> */}
    </div>
  );
}
