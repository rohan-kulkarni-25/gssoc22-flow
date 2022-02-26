import React from "react";
import projects from "../assets/projects.png";

export default function Page5({ nextPage, prevPage }) {
  return (
    <div className="w-2/4 p-4 flex flex-col items-center gap-4 mt-8 md:text-lg md:w-fit">
      <div className="text-2xl flex flex-col gap-8 leading-loose md:text-lg md:w-fit m-8">
        <p className="font-semibold text-4xl ">PROJECT DETAILS</p>
        <p>
          When you click on the project name you will be redirected to github
          repository of the project. In the
        </p>
        <p>
          You can check <span>README.md</span> file which will explain you about
          the project. Make sure you read <span>Contribution Guidelines</span>
          which will be included in project readme.
        </p>
        <p>
          You can setup the project and test it.If you find some bugs you can
          create new issues and submit a Pull request. If think you can add a
          feature you can do same for that also.
        </p>
      </div>
      {/* <button
        className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
        type="submit"
        onClick={nextPage}
      >
        WHAT ARE TASKS I HAVE TO DO AS OF NOW ?
      </button> */}
    </div>
  );
}
