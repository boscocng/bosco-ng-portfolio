 "use client";

import React from "react";
import { Caveat } from "next/font/google";

const headline = Caveat({
  weight: ["700"],
  subsets: ["latin"],
});

export default function ResumePage() {
  return (
    <main className="min-h-screen notebook-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className={`${headline.className} text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 relative inline-block`}
          >
            My Resume
            {/* Swiggly underline highlight */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-4 text-red-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 Q25 5, 45 15 T85 15 T125 15 T165 15 T195 15"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="opacity-80"
              />
            </svg>
          </h1>
        </div>

        {/* Resume Container */}
        <div className="bg-white/95 rounded-lg border border-gray-200/50 shadow-lg p-4 sm:p-6">
          {/* PDF Viewer */}
          <div className="w-full">
            <iframe
              src="/images/Bosco Ng Resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
              className="w-full h-[600px] sm:h-[700px] lg:h-[800px] border border-gray-300 rounded-lg shadow-inner"
              title="Bosco Ng Resume"
            />
          </div>
        </div>
      </div>
    </main>
  );
}


