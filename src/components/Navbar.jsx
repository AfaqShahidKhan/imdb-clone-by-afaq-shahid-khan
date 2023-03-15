import React from "react";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="flex justify-center  bg-amber-200 dark:bg-gray-400 lg:text-lg ">
      <NavbarItems title="Trending" param="fetchTrending" />
      <NavbarItems title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
