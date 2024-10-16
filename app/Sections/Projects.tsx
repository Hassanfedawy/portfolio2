import Link from "next/link";
import { AnimatedListDemo } from "../_components/AnimatedList";

const projects = [
  {
    title: "Amazon Clone",
    Description:
      "A functional e-commerce platform modeled after Amazon, featuring a clean and responsive design. Users can browse products, add items to their cart, and manage their profiles through user authentication. Built with Next.js for server-side rendering and Tailwind CSS for efficient styling, the site offers a seamless shopping experience similar to Amazon.",
    Tech: "React | Next.js | Tailwind CSS | TypeScript | Redux",
    LiveLink: "https://amazonclone-rosy-omega.vercel.app/",
    GitHub: "https://github.com/Hassanfedawy/amazonclone",
  },
  {
    title: "Airbnb Clone",
    Description:
      "A replica of Airbnb’s platform, featuring a sleek and responsive design. Users can explore property listings, view details, and interact with the booking system. The site provides a familiar user experience, capturing key functionalities like browsing and filtering listings. Built with Next.js and Tailwind CSS for a smooth user experience.",
    Tech: "React | Next.js | Tailwind CSS | TypeScript",
    LiveLink: "https://air-bnb-clone-rose.vercel.app/",
    GitHub: "https://github.com/Hassanfedawy/air-bnb_clone",
  },
  {
    title: "Legacy Basketball Academy",
    Description:
      "A professional platform designed to promote the academy’s programs and offerings. It features a modern design that highlights information about basketball training sessions, coaching staff, and upcoming events. Built using Next.js and Tailwind CSS for a clean, responsive experience.",
    Tech: "React | Next.js | Tailwind CSS | TypeScript | Framer Motion",
    LiveLink: "https://legacy-basketball-academy.vercel.app/",
    GitHub: "https://github.com/Hassanfedawy/Legacy-Basketball-Academy",
  },
];

function Projects() {
  return (
    <section className="my-12 px-5" id="projects">
      <h1 className="font-bold text-3xl mb-8 text-center text-gray-800">Projects</h1>

      {/* Responsive Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            className="bg-white border border-gray-200 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            key={project.title}
          >
            {/* Project Title and Description */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{project.Description}</p>
              <p className="text-gray-500 font-medium text-sm">{project.Tech}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between space-x-3 mt-4">
              <Link href={project.GitHub} target="_blank" className="flex-1 text-center bg-green-600 hover:bg-green-500 text-white rounded-md py-2 px-4 transition-colors">
                  GitHub
              </Link>
              <Link href={project.LiveLink} target="_blank" className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white rounded-md py-2 px-4 transition-colors">
                  Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
