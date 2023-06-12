import Work from "../../assests/work.png";

export default function Footer() {
  return (
    <footer id="contact_me" className="xl:h-screen bg-red-400">
      <h1 className="text-center py-10 text-3xl lg:text-6xl text-red-900 font-extrabold">
        Contact Me
      </h1>
      <h1 className="text-center py-4 text-red-100 text-xl lg:text-3xl font-semibold">
        Feel free to connect with me and contact for further discussions.
      </h1>
      <h3 className="text-center py-4 text-red-100 text-lg lg:text-2xl font-light">
        <span className="font-bold">Mail:</span>{" "}
        <span className="transition duration-300 delay-100 underline text-red-200 hover:text-red-900 mx-4">
          torawanedipanshu@gmail.com
        </span>{" "}
      </h3>
      <p className="text-center py-2 text-red-200 text-md lg:text-lg font-normal max-w-xl mx-auto">
        Thank you for visiting my portfolio website, and I hope you enjoy
        exploring my work as much as I enjoyed creating it. I look forward to
        connecting with you and discussing how we can bring your next project to
        life!
      </p>
      <img
        className="p-6 mx-auto xl:w-1/4"
        src={Work}
        alt="Illustration Image of working on pc"
      />
    </footer>
  );
}
