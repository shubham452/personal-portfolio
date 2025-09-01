import React from "react";
import admin from "../image/admin.png";
import buyerseller from "../image/buyerseller.png";
import edusupply from "../image/edusupply.png";
import rideio from "../image/ride.io.png";

// Dummy data
const projects = [
  {
    number: 1,
    title: "_admin dashboard",
    image: admin,
    description:
      "An E-commerce admin dashboard made using React and Redux Toolkit.",
    liveDemo: "https://admin-dashboard-gamma-two-37.vercel.app/",
    github: "https://github.com/shubham452/admin-dashboard",
    tech_stack: ["HTML CSS", "ReactJs"],
  },
  {
    number: 2,
    title: "_ride.io",
    image: rideio,
    description: "A ride booking platform with location and route features.",
    liveDemo:
      "https://ride-1z7akdmid-shubhams-projects-bea173c7.vercel.app",
    github: "https://github.com/shubham452/Ride.io",
    tech_stack: ["HTML CSS", "ReactJs"],
  },
  {
    number: 3,
    title: "_edusupply",
    image: edusupply,
    description: "An educational supply landing page built with React.",
    liveDemo: "https://educare-landing-page-liart.vercel.app/",
    github: "https://github.com/shubham452/educare-landing-page",
    tech_stack: ["HTML CSS", "ReactJs"],
  },
  {
    number: 4,
    title: "_buyer seller app",
    image: buyerseller,
    description: "A marketplace app where buyers and sellers can interact.",
    liveDemo: "https://buyer-seller-app-mocha.vercel.app/",
    github: "https://github.com/shubham452/buyer-seller-app",
    tech_stack: ["HTML CSS", "ReactJs"],
  },
  {
    number: 5,
    title: "_personal financial tracker",
    image:
      "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
    description: "A personal finance tracker to monitor income and expenses.",
    liveDemo: "#",
    github: "https://github.com/shubham452/personal-finance-tracker",
    tech_stack: ["HTML CSS", "ReactJs", "NodeJs"],
  },
  {
    number: 6,
    title: "_employee management",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    description:
      "An employee management system, where user can be tracked maintained.",
    liveDemo: "#",
    github: "https://github.com/shubham452/UserManagement-CRUD",
    tech_stack: ["HTML CSS", "ReactJs", "NodeJs"],
  },
  {
    number: 7,
    title: "_rental stay",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    description: "A rental platform to book stays and manage listings.",
    liveDemo: "#",
    github: "https://github.com/shubham452/Rental-stay",
    tech_stack: ["HTML CSS", "ReactJs", "NodeJs"],
  },
];

const sidebarFilters = [
  { name: "HTML CSS", checked: true },
  { name: "ReactJs", checked: true },
  { name: "NodeJs", checked: true },
  { name: "JavaScript", checked: true },
  { name: "NextJs", checked: true },
  { name: "Java-Spring Boot", checked: true },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] flex flex-col md:flex-row font-mono text-[#a2acc7]">
      {/* Sidebar */}
      <aside className="w-full md:w-[240px] bg-[#111827] border-b md:border-b-0 md:border-r border-[#222e41] py-6 px-4 flex-shrink-0">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#7dd3fc] mb-3 pl-1">
            // my-projects
          </p>
          <ul className="space-y-2 mb-6 grid grid-cols-2 md:grid-cols-1">
            {sidebarFilters.map((filter) => (
              <li key={filter.name} className="flex items-center gap-2 pl-2">
                <input
                  type="checkbox"
                  checked={filter.checked}
                  readOnly
                  className="accent-[#7dd3fc] rounded-sm h-4 w-4"
                />
                <label className="text-[#e1e7ef] select-none text-sm md:text-base">
                  {filter.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main project card grid */}
      <main className="flex-1 p-6 md:p-8 flex flex-col items-center overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-[#1f2937] bg-[#0d1725] rounded-xl p-5 shadow-lg flex flex-col transition-all hover:border-[#7dd3fc]"
            >
              <h3 className="font-semibold mb-3 text-lg tracking-wide text-[#67bbea]">
                <span className="text-[#729cff]">Project {project.number} </span>
                <span className="font-mono font-normal text-[#a2acc7]">//</span>{" "}
                <span className="font-mono text-[#5ec7ff]">{project.title}</span>
              </h3>
              <div className="rounded-lg overflow-hidden mb-4 border border-[#191f2a] bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <p className="flex-1 mb-4 text-sm md:text-base text-[#a2acc7]">
                {project.description}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                {project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#202d3d] text-white/90 hover:bg-[#15212f] px-3 py-1.5 rounded font-mono text-xs md:text-sm transition border border-[#263558] shadow"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto hover:scale-110 transition-transform"
                    aria-label="View on GitHub"
                  >
                    <svg
                      className="w-6 h-6 text-[#a2acc7]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.43 2.865 8.185 6.838 
                        9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369
                        -1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.609.069
                        -.609 1.003.07 1.531 1.03 1.531 1.03.893 1.531 2.341 1.089 2.91.833.09
                        -.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.951
                        0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65
                        0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004
                        1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546
                        1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687
                        0 3.847-2.336 4.695-4.563 4.944.359.31.678.924.678
                        1.863 0 1.345-.012 2.427-.012 2.759 0 .268.18.58
                        .688.482C19.137 20.204 22 16.45 22 12.021 22
                        6.484 17.523 2 12 2z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
