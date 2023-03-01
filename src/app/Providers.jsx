"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:text-gray-200 dark:bg-gray-700 select-none transition-colors duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
}
