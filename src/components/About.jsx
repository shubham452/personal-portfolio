import React, { useState } from "react";
import { FaChevronDown, FaEnvelope, FaPhone } from "react-icons/fa";

export default function AboutMe() {
  const [expanded, setExpanded] = useState({
    contacts: true,
  });

  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
    "Java",
    "React.js",
    "Node.js",
    "Express.js",
    "SQL",
    "MongoDB",
    "Tailwind CSS",
    "Spring Boot",
  ];

  return (
    <div className="flex h-screen w-full pt-16 overflow-hidden text-md text-[#607b96] bg-[#011627] font-mono">
      {/* Sidebar */}
      <div className="w-[300px] border-r border-[#1e2d3d] flex flex-col">
        {/* Tech Stack */}
        <div className="px-4 py-3 border-b border-[#1e2d3d]">
          <h2 className="text-white font-semibold mb-2">Tech Stack</h2>
          <ul className="space-y-1 text-[#43d9ad] text-sm">
            
          </ul>
        </div>

        {/* Contacts */}
        <div
          className="flex items-center px-4 py-2 cursor-pointer border-t border-[#1e2d3d] hover:bg-[#1e2d3d]"
          onClick={() =>
            setExpanded((prev) => ({ ...prev, contacts: !prev.contacts }))
          }
        >
          <FaChevronDown
            className={`mr-2 transition-transform ${
              expanded.contacts ? "rotate-0" : "-rotate-90"
            }`}
          />
          <span className="text-white font-medium">contacts</span>
        </div>
        {expanded.contacts && (
          <div className="pl-6 py-2 space-y-2">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>shubham.sk70@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+91 9337910991</span>
            </div>
          </div>
        )}
      </div>

      {/* File Viewer */}
      <div className="flex-1 border-r border-[#1e2d3d] overflow-auto">
        <div className="px-4 py-2 border-b border-[#1e2d3d]">
          <span className="text-[#607b96]">// Tech Info</span>
        </div>
        <pre className="p-6 whitespace-pre-wrap">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex">
              <span className="w-8 pr-4 text-right">{idx + 1}</span>
              <span>{tech}</span>
            </div>
          ))}
        </pre>
      </div>

      {/* Code Snippet Right Panel */}
      <div className="hidden lg:block flex-1 p-6 overflow-auto">
        <h2 className="text-[#607b96] text-lg mb-6">// Code Snippet Showcase</h2>

        <div className="bg-[#011221] p-4 rounded-lg border border-[#1e2d3d] shadow space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-[#5565e8] text-sm font-semibold">
                  Shubham907
                </p>
                <p className="text-[#607b96] text-xs">Created 2 weeks ago</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-[#607b96] text-sm">
                <img
                  src="/comments-icon.webp"
                  alt="comments"
                  className="w-6 h-5"
                />
                <span>details</span>
              </div>
              <div className="flex items-center gap-2 text-[#607b96] text-sm">
                <img src="/Star.webp" alt="star" className="w-7 h-5" />
                <span>3 stars</span>
              </div>
            </div>
          </div>

          <pre className="bg-[#011627] p-4 rounded text-sm text-[#e5e9f0] font-mono overflow-x-auto">
<code className="whitespace-pre-wrap">
{`const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const logSearch = debounce((query) => {
  console.log("Search:", query);
}, 300);`}
</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
