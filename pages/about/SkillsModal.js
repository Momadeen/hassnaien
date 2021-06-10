import Modal from "./Modal";

const skills = [
  "HTML/CSS",
  "Javascript",
  "React",
  "Next.js",
  "graphql/Apollo",
  "Typescript",
  "Git",
  "React Native",
];

const SkillsModal = ({ closeModal, isOpen }) => (
  <Modal title="Skills" isOpen={isOpen} closeModal={closeModal}>
    <ul className="list-disc m-8">
      {skills?.map((skill) => (
        <li className="mb-4 font-bold">{skill}</li>
      ))}
    </ul>
  </Modal>
);

export default SkillsModal;
