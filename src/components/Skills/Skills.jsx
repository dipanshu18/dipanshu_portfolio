/* eslint-disable react/prop-types */
import skills from "../../assests/skills";

import SkillsList from "./SkillsList";

export default function Skills() {
  return (
    <section id="skills" className="xl:h-screen bg-red-200">
      <h1 className="text-center pt-10 text-3xl lg:text-6xl text-red-900 font-extrabold">
        Skills
      </h1>
      <ul className="pb-20 font-semibold flex justify-evenly flex-wrap gap-10 lg:gap-20 text-lg lg:text-2xl mt-14 text-red-500 max-w-sm lg:max-w-4xl mx-auto">
        {skills.map((skill) => (
          <SkillsList skill={skill} key={skill} />
        ))}
      </ul>
    </section>
  );
}
