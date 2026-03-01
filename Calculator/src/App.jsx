import React, { useState } from "react";

const App = () => {

  const Buttons = [
    "AC", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "00", ".", "=",
  ];

  const [Input, setInput] = useState("")

  const Update = (e)=>{
    if(e==="AC"){
      setInput("")
    }
    else if(e==="DEL"){
      const str = Input.slice(0,-1)
      setInput(str)
    }
    else if(e==="="){
      try {
     const result = Function("return " + Input)();

      setInput(result.toString());
   } catch {
     setInput("Error");
  }
  
      

    }
    else {
      const str2 = Input.concat(e)
      setInput(str2)

    }

  }



  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-black">
      
      {/* Calculator Body */}
      <div className="w-full h-full max-w-sm bg-zinc-500 rounded-2xl p-3 flex flex-col">
        
        {/* Display */}
        <div className="h-28 mb-4">
          <input
            type="text"
            placeholder="0"
            readOnly
            value={Input}
            className="
              w-full h-full
              bg-zinc-400 text-white
              rounded-xl
              text-right text-4xl font-bold
              px-4
              outline-none
            "
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4 flex-1">
          {Buttons.map((btn, idx) => {
            const isOperator = ["+", "-", "*", "/", "%"].includes(btn);
            const isEqual = btn === "=";
            const isUtility = btn === "AC" || btn === "DEL";

            return (
              <button
                key={idx}
                onClick={()=>Update(btn)}
                className={`
                  aspect-square rounded-xl font-bold text-lg
                  flex items-center justify-center
                  transition-all duration-150
                  active:scale-95

                  ${
                    isEqual
                      ? "bg-orange-600 text-white hover:bg-orange-500"
                      : isOperator || isUtility
                      ? "bg-zinc-800 text-orange-500 hover:bg-zinc-700"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }
                `}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
