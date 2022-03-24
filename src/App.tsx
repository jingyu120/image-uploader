import React, { ChangeEvent } from "react";
import "./App.css";
import Image from "./image.svg";

function App() {
  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div className="flex justify-center h-screen items-center ">
      <div className=" flex flex-col h-[500px] w-[450px] justify-between items-center rounded-xl bg-white shadow-md center">
        <div className="flex flex-col m-2 items-center">
          <h1 className="font-semibold text-3xl">Upload your image</h1>
          <p>File should be Jpeg, Png...</p>
        </div>
        <div className="flex-1 border-dashed border-2 border-blue-300 rounded-[20px] bg-gray-100 p-3 flex flex-col items-center justify-evenly w-[300px] m-6">
          <img className="w-[150px]" src={Image} alt="Image" />
          <p className="text-gray-400 font-semibold">
            Drag & Drop your Image here
          </p>
          {/*<input type="file" onChange={fileSelectedHandler} />*/}
        </div>
        <span>Or</span>
        <div className="m-6">
          <button className="bg-blue-500 rounded-md px-3 py-2">
            Choose a file
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
