import React from "react";

export default function Page2({ nextPage, prevPage }) {
  const callNext = () => {
    nextPage();
  };

  return (
    <div className="w-2/4 p-4 flex flex-col items-center gap-4 mt-8 md:text-lg md:w-fit">
      <div className="text-2xl flex flex-col gap-8 leading-loose md:text-lg m-8">
        <p className="font-semibold text-4xl ">What is GSSOC ?</p>
        <p>
          As you have registered and got selected so you might be aware of
          answer to this question but if you are not don't worry I am here to
          help.
        </p>
        <p>
          GSSOC is an open source program of 3 months which helps contributors
          like you in getting involved in open source community.In this program
          project admins
          <span className="text-pink-500">
            ( A person who has his own or is maintainer of the project)
          </span>
          brings the project for contribution. Mentors are the people who have
          experience in this field. They will guide you through out the process
          of the program. Just you need to be little patience because they also
          have their own works to do apart from community.
        </p>
      </div>
      {/* <button
        className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
        type="submit"
        onClick={callNext}
      >
        WILL I GET PERSONAL MENTOR ?
      </button> */}
    </div>
  );
}
