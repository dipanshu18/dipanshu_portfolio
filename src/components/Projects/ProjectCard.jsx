/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  demoLink,
  codeLink,
}) {
  return (
    <m.div
      whileHover={{ scale: 1.05 }}
      className="bg-red-300 text-red-900 rounded-lg p-10 shadow-2xl shadow-red-300 max-w-[400px]"
    >
      <h1 className="font-bold text-xl lg:text-3xl">{title}</h1>
      <p className="font-medium text-red-500 py-4 text-sm">{description}</p>
      <div className="flex gap-8">
        <div className="transition hover:scale-125 rounded-md bg-red-100 p-2 font-semibold">
          <a href={codeLink}>Code</a>
        </div>
        <div className="transition hover:scale-125 rounded-md bg-red-100 p-2 font-semibold">
          <a href={demoLink}>Demo</a>
        </div>
      </div>
    </m.div>
  );
}
