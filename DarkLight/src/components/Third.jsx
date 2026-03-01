import React, { useState } from "react";

const Third = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="min-h-screen bg-red flex items-center justify-center">

       <button >Change</button>
      <div className="bg-zinc-800 p-6 rounded-2xl w-96">
        <h1 className="text-rose-300 text-2xl font-bold mb-4">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 bg-zinc-700 text-white rounded-xl outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-zinc-700 text-white rounded-xl outline-none"
        />

        <p className="text-gray-400 mt-4">
          Email:
          <span className="text-white font-semibold ml-2">
            {email || "—"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Third;
