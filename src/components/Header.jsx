import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex ">
          <MenuItems title="HOME" address="/" Icon={AiFillHome} />
          <MenuItems title="ABOUT" address="/" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <h2 className="text-2xl">
              {" "}
              <span className="bg-amber-600 px-2 py-1 rounded-lg">IMDB</span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
