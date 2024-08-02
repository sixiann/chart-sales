"use client";
import { useState } from "react";
import InputForm from "./InputForm";
import SubmittedForm from "./SubmittedForm";

export default function Home() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[90%] sm:w-[460px] py-10 px-9 rounded-lg shadow-lg bg-secondary text-center text-text">
      {!isSubmit ? (
        <InputForm setIsSubmit={setIsSubmit} />
      ) : (
        <SubmittedForm setIsSubmit={setIsSubmit}/>
      )}
      </div>
    </div>
  );
}

