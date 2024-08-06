"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

function page() {
  return (
    <div className=" font-minecraft-bold flex flex-col items-center justify-center h-screen">
      <Navbar />
      <h1 className=" text-2xl mb-8">Adding Soon!</h1>
      <img
        src="https://i.pinimg.com/originals/74/63/59/74635989b770a38189fff31a8ef152ea.gif"
        // className=" h-52"
        alt="Under Construction"
      />
    </div>
  );
}

export default page;
