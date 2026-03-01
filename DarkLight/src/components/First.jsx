

import { useContext, useState } from "react";
import { ThemeContextData } from "../contextAPI/ThemeContext";


const First = () => {

  const [Theme,setTheme] = useContext(ThemeContextData) ;
   
  const Toggle = () => {
  setTheme(prev => (prev === "light" ? "dark" : "light"));
};

  return (
    <div className="min-h-screen da flex items-center justify-center bg-gray-200 dark:bg-blue-600">
      <div className="w-80 p-6 rounded-2xl bg-white dark:bg-zinc-800">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-red-400">
            First Name
          </h1>

          

          {/* Toggle Button (structure only) */}
          <button className="px-3 py-1 active:scale-150 cursor-pointer
           transition-all duration-500 text-sm rounded-lg bg-orange-500 text-white"
           onClick={Toggle}>
            Toggle
          </button>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter first name"
          className="w-full px-4 py-2 rounded-xl outline-none
                     bg-gray-100 text-black
                     dark:bg-zinc-700 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500"
        />

        {/* Output */}
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Name: <span className="font-semibold text-black dark:text-white">—</span>
        </p>

      </div>
    </div>
  );
};

export default First;
