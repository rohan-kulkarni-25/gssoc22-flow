import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PAGE1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import React, { useState } from "react";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";

function App() {
  const nextPage = () => {
    console.log(`called`);
    let currentPage = page;
    if (currentPage < 6) {
      setpage(page + 1);
    }
    updateRender(currentPage + 1);
  };
  const prevPage = () => {
    let currentPage = page;
    if (currentPage >= 2) {
      setpage(page - 1);
    }
    updateRender(currentPage - 1);
  };
  const [page, setpage] = useState(1);
  const [render, setrender] = useState(
    <PAGE1 nextPage={nextPage} prevPage={prevPage}></PAGE1>
  );
  // const nextPage = () => {
  //   let currentPage = page;
  //   if (currentPage < 6) {
  //     setpage(page + 1);
  //   }
  //   updateRender(currentPage + 1);
  // };
  // const prevPage = () => {
  //   let currentPage = page;
  //   if (currentPage >= 2) {
  //     setpage(page - 1);
  //   }
  //   updateRender(currentPage - 1);
  // };
  const updateRender = (page) => {
    console.log(`Called`);
    switch (page) {
      case 1:
        setrender(<PAGE1 nextPage={nextPage} prevPage={prevPage}></PAGE1>);
        break;
      case 2:
        setrender(<Page2 nextPage={nextPage} prevPage={prevPage}></Page2>);
        break;
      case 3:
        setrender(<Page3 nextPage={nextPage} prevPage={prevPage}></Page3>);
        break;
      case 4:
        setrender(<Page4 nextPage={nextPage} prevPage={prevPage}></Page4>);
        break;
      case 5:
        setrender(<Page5 nextPage={nextPage} prevPage={prevPage}></Page5>);
        break;
      case 6:
        setrender(<Page6 nextPage={nextPage} prevPage={prevPage}></Page6>);
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex items-center flex-col">
      <Navbar></Navbar>
      {render}
      <div className="flex gap-8 m-4">
        {" "}
        <button
          className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
          type="submit"
          onClick={prevPage}
        >
          PREV
        </button>
        <button
          className="w-fit bg-orange-600 p-4 rounded-2xl font-bold text-2xl text-white"
          type="submit"
          onClick={nextPage}
        >
          NEXT
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
