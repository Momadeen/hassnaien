import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { MdWork, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Leftbar = () => {
  const router = useRouter();

  const links = [
    {
      title: "Home",
      href: "/",
      icon: <AiFillHome style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "About",
      href: "/about",
      icon: <FaUser style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: <MdWork style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <MdMessage style={{ width: "20px", height: "20px" }} />,
    },
  ];

  return (
    <>
      <div className="md:flex hidden md:w-1/4 bg-white border-r-2 md:h-screen  px-12 border-backgroundGray flex justify-center items-center">
        <div className="flex flex-col">
          <p className="font-bold text-2xl tracking-widest border-b-2 border-black">
            HASSANIEN
          </p>
          <ul className="mt-10">
            {links?.map((link, i) => (
              <li
                key={i}
                className="group transform hover:scale-110 motion-reduce:transform-none transition duration-150 ease-in-out mb-2"
              >
                <Link href={link?.href}>
                  <a
                    className={
                      router?.pathname === link?.href
                        ? "text-black font-bold"
                        : "text-textGray group-hover:text-black group-hover:font-bold"
                    }
                  >
                    {link?.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs md:text-md text-textGray mt-10">© 2021</p>
        </div>
      </div>
      <div className="flex md:hidden h-12 w-full bg-white items-center justify-between px-2">
        <p className="font-bold text-lg tracking-widest">HASSANIEN</p>
        <ul className="flex flex-row items-center justify-center">
          {links?.map((link, i) => (
            <li key={i} className="mr-4">
              <Link href={link?.href}>
                <a>{link?.icon}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Leftbar;
