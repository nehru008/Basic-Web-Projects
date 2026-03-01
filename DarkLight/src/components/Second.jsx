import React, { useState } from "react";

const Second = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
      <div className="bg-zinc-800 p-6 rounded-2xl w-96">
        <h1 className="text-blue-600 text-2xl font-bold mb-4">
          Full Name
        </h1>

        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full mb-3 px-4 py-2 bg-zinc-700 text-white rounded-xl outline-none"
        />

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-2 bg-zinc-700 text-white rounded-xl outline-none"
        />

        <p className="text-gray-400 mt-4">
          Full Name:
          <span className="text-white font-semibold ml-2">
            {firstName || lastName ? `${firstName} ${lastName}` : "—"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Second;
