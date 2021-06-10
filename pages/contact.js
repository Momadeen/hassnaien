import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const socials = [
  {
    icon: <AiFillGithub style={{ width: "40px", height: "40px" }} />,
    href: "https://github.com/Momadeen?tab=repositories",
  },
  {
    icon: <AiFillLinkedin style={{ width: "40px", height: "40px" }} />,
    href: "https://www.linkedin.com/in/hassanien97/",
  },
  {
    icon: <AiFillMail style={{ width: "40px", height: "40px" }} />,
    href: "mailto:madienxz@gmail.com",
  },
];

function Contact() {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <p className="font-bold">Contact With me</p>

      <ul className="flex flex-row mt-8">
        {socials?.map((social, i) => (
          <li key={i} className="mr-4">
            <a href={social.href} target="_blank">
              {social?.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
