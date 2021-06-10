import { useState } from "react";
import SkillsModal from "./SkillsModal";
import WorkModal from "./WorkModal";

function About() {
  const infos = [
    { title: "Age:", value: "24" },
    { title: "Birthday:", value: "20.07.1997" },
    { title: "Address:", value: "Ismailia, Egypt" },
    { title: "Email:", value: "madienxz@gmail.com" },
    { title: "Study:", value: "Graduate of the Faculty of Commerce SCU" },
  ];

  const [modalSkillsIsOpen, setSkillsIsOpen] = useState(false);
  const [modalWorkIsOpen, setWorkIsOpen] = useState(false);

  function openModal(type) {
    type === "skills" ? setSkillsIsOpen(true) : setWorkIsOpen(true);
  }

  function closeModal(type) {
    type === "skills" ? setSkillsIsOpen(false) : setWorkIsOpen(false);
  }

  return (
    <>
      <div>
        <p className="color-black font-extrabold text-4xl">
          Hi! I'm Mo Hassanien 👋
        </p>
        <img
          src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Picture of the author"
          className="w-full object-cover mt-8"
          style={{ height: "300px" }}
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="color-black font-extrabold text-3xl">
              Mohammed Hassanien
            </p>
            <p className="text-textGray font-normal text-xl">
              Frontend Engineer
            </p>

            <div className="flex flex-col justify-start w-full mt-4">
              <button
                onClick={() => openModal()}
                className="mt-4 w-52 rounded-md bg-black px-6 py-2 text-white font-medium text-md"
              >
                Work Experience
              </button>
              <button
                onClick={() => openModal("skills")}
                className="mt-8 w-52 rounded-md bg-black px-6 py-2 text-white font-medium text-md"
              >
                Skills
              </button>
            </div>
          </div>

          <div className="mt-8 ml-4">
            {infos?.map((info) => (
              <div className="flex flex-row mb-5">
                <p className="color-black font-bold text-sm min-w-min">
                  {info?.title}
                </p>
                <p className="text-textGray font-normal text-sm ml-5 tracking-wider transition duration-500 ease-in-out transform hover:scale-110">
                  {info?.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalSkillsIsOpen && (
        <SkillsModal
          isOpen={modalSkillsIsOpen}
          closeModal={() => closeModal("skills")}
        />
      )}
      {modalWorkIsOpen && (
        <WorkModal isOpen={modalWorkIsOpen} closeModal={() => closeModal()} />
      )}
    </>
  );
}

export default About;
