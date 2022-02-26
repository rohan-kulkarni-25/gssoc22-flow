import React from "react";
import projects from "../assets/projects.png";

export default function Page4({ nextPage, prevPage }) {
  return (
    <div className="w-2/4 p-4 flex flex-col items-center gap-4 mt-8 md:text-lg md:w-fit">
      <div className="text-2xl flex flex-col gap-8 leading-loose md:text-lg md:w-fit m-8">
        <p className="font-semibold text-4xl ">PROJECT SELECTION</p>
        <p>
          You can visit
          <a
            className="text-orange-600 font-semibold"
            href="https://gssoc.girlscript.tech/project"
          >
            GSSOC 22 Website
          </a>
          for list of projects.
        </p>
        <img src={projects} alt="" srcset="" />
        <p>
          You can select the projects which is related to your tech stack or
          intrest. If you are selecting more than one project then please make
          sure you are devoting required time to each project. You don't need to
          be expert at required technology. You can always learn during the
          program and that's the objective.
        </p>
        <p>
          After selecting the project you don't need to register anywhere. You
          can just visit the github repository and start your contributions (
          ONLY Contributions after 1st March will be considered for GSSOC 22 but
          for OPEN SOURCE you can start your contributions anytime.)
        </p>
      </div>
      {/* <button
        className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
        type="submit"
        onClick={nextPage}
      >
        WHERE CAN I FIND THE PROJECT DETAILS ?
      </button> */}
    </div>
  );
}
