// eslint-disable-next-line react/prop-types
export default function SkillsList({ skill }) {
  return (
    <li className="transition duration-100 delay-75 hover:text-red-700 hover:scale-125 cursor-pointer">
      {skill}
    </li>
  );
}
