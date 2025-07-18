'use client'

import { useState } from "react";

export default function CustomCheckbox({ isChecked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-[20px] h-[20px] rounded-[6px] flex items-center justify-center transition-all border-2 ${
        isChecked
          ? "bg-[#0070FF] border-[#0070FF]"
          : "bg-white border-[#0070FF]"
      }`}
    >
      {isChecked ? (
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <div className="w-3 h-0.5 bg-[#0070FF] rounded-sm" />
      )}
    </button>
  );
}
