import React, { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiUser,
  FiLink,
  FiHelpCircle,
  FiInfo,
} from "react-icons/fi";

const App = () => {
  const [bool, setbool] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-xl p-2">

       {/* TOGGLE ICON */}
<div className="flex items-center">
  {!bool ? (
    <FiEye
      className="text-xl text-gray-600 cursor-pointer h-12 w-12 p-2"
      onClick={() => setbool(true)}
    />
  ) : (
    <div className="flex items-center gap-2">
      <FiEyeOff
        className="text-xl text-gray-600 cursor-pointer h-12 w-12 p-2"
        onClick={() => setbool(false)}
      />
      <span className="text-lg text-bold text-black">
        Settings
      </span>
    </div>
  )}
</div>


        
        {bool && (
          <div className="flex flex-col w-56 rounded-xl overflow-hidden bg-white border">

            <div className="flex items-center gap-3 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
              <FiUser className="text-xl text-gray-600" />
              <span className="text-sm">Account</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
              <FiLink className="text-xl text-gray-600" />
              <span className="text-sm">Linked Feeds</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
              <FiHelpCircle className="text-xl text-gray-600" />
              <span className="text-sm">Help</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100">
              <FiInfo className="text-xl text-gray-600" />
              <span className="text-sm">About us</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default App;
