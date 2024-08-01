"use client";
import { useState } from "react";
import InputForm from "./InputForm";
import SubmittedForm from "./SubmittedForm";

export default function Home() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {!isSubmit ? (
        <InputForm setIsSubmit={setIsSubmit} />
      ) : (
        <SubmittedForm setIsSubmit={setIsSubmit}/>
      )}
    </div>
  );
}

