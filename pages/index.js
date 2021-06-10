import styles from "../styles/Home.module.css";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  const socials = [
    {
      icon: <AiFillGithub style={{ width: "40px", height: "40px" }} />,
      href: "https://github.com/Momadeen?tab=repositories",
    },
    {
      icon: <AiFillLinkedin style={{ width: "40px", height: "40px" }} />,
      href: "https://www.linkedin.com/in/hassanien97/",
    },
  ];
  return (
    <div className="flex items-center h-full flex-col md:flex-row">
      <Image
        src="/has.jpg"
        alt="Picture of the author"
        objectFit="contain"
        
        width={300}
        height={300}
        className={styles.boxAnimate}
      />
      <div className="flex flex-col ml-8 text-center md:text-left">
        <p className="text-5xl font-extrabold text-black mt-8 md:mt-0">
          MOHAMMED HASSANIEN
        </p>
        <p className="text-md font-normal italic text-textGray mt-6 w-5/6">
          Frontend engineer with 3+ years experience, Interested in frontend and
          everything in its orbit.
        </p>
        <ul className="flex flex-row mt-8">
          {socials?.map((social, i) => (
            <li key={i} className="mr-4">
              <a href={social.href} target="_blank">{social?.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
