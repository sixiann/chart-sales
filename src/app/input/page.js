"use client";
import { useState } from "react";
import InputForm from "./InputForm";
import SubmittedForm from "./SubmittedForm";

export default function Home() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-background">
      <div
        onClick={() => (window.location.href = "/chart")}
        className="flex items-center absolute top-0 left-0 ml-4 mt-4 hover:cursor-pointer hover:text-teal-600 transition duration-200 ease-in-out"
      >
        {/* back button */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 15 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => (window.location.href = "/chart")}
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-1 text-lg font-medium">Back</span>
      </div>

      {/* input form */}
      <div className="w-[90%] sm:w-[460px] py-10 px-9 rounded-lg shadow-lg bg-primary text-center text-text mt-4">
        {!isSubmit ? (
          <InputForm setIsSubmit={setIsSubmit} />
        ) : (
          <SubmittedForm setIsSubmit={setIsSubmit} />
        )}
      </div>
    </div>
  );
}
