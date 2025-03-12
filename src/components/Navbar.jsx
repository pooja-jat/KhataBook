import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 md:bg-emerald-800 px-12 py-4  flex items-center justify-between">
      <h1 className=" text-white text-xl font-bold">KhataBook</h1>
      <button className="bg-white py-1 px-2 text-sm rounded-sm font-bold hover:bg-slate-500 cursor-pointer transition delay-150 duration-150">
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
