import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex ">
          <MenuItems title="HOME" address="/" Icon={AiFillHome} />
          <MenuItems title="ABOUT" address="/" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex items-center space-x-5">
          <DarkModeSwitch />
          <Link href="/">
            <h2 className="text-2xl">
              {" "}
              <span className="bg-amber-500 px-2 py-1 rounded-lg font-bold">
                IMDB
              </span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
