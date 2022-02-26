import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 flex items-center justify-center w-full">
      <img src={Logo} className="h-16" alt="" srcset="" />
    </nav>
  );
}
