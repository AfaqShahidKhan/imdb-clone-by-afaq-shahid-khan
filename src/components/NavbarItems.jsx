"use client";
import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div
      className={`m-4  font-semibold hover:text-amber-600 p-2 ${
        genre &&
        genre === param &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`}
    >
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  );
}
