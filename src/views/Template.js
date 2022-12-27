import React from "react";
import Sidebar from "../components/Sidebar";

export default function StepA({ step }) {
  return (
    <div className=" w-full h-auto bg-white p-6 lg:pb-6 rounded-lg lg:grid gcc pb-10 shadow-lg md:min-h-[600px]">
      <Sidebar />
      <div className=" flex items-center justify-center py-5">{step}</div>
    </div>
  );
}
