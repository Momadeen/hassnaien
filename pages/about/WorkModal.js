import Modal from "./Modal";

const jobs = [
  {
    companyName: "Syft.la",
    title: "Frontend developer",
    date: "07.2019 - Present",
    description:
      "Building Technology to help bring Transparency and Automation to Digital Marketing",
    whatIDid: [
      "Created Many landing pages with our stack",
      "Created SYFT.LA App",
      "Developing features to enhance the user experience.",
      "Optimizing web pages for maximum speed and scalability.",
      "Building reusable code for future use",
    ],
  },
  {
    companyName: "Freelancer",
    title: "Frontend developer",
    date: "07.2018 - 07.2019",
    whatIDid: ["Created Many landing pages", "Created themes with wordpress"],
  },
];

const Job = ({ job }) => (
  <div className="flex flex-col mb-8">
    <div className="flex flex-row items-center">
      <span className="h-3 w-3 rounded-full bg-black mr-5" />
      <p className="font-bold text-xl">{job?.companyName}</p>
    </div>
    <div className="ml-8 mt-1">
      <p className="text-textGray text-sm tracking-wide">{job?.title}</p>
      <p className="text-textGray text-sm tracking-wide">{job?.date}</p>
      <p className="mt-4">{job?.description}</p>
      <div className="mt-8">
        <p className="font-bold text-md">Main responsibilities:</p>
        <ul className="list-disc mt-2 ml-8">
          {job?.whatIDid?.map((rep, i) => (
            <li key={i} className="mb-2">{rep}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const WorkModal = ({ closeModal, isOpen }) => (
  <Modal title="Work Experience" isOpen={isOpen} closeModal={closeModal}>
    {jobs?.map((job,i) => (
      <Job key={i} job={job} />
    ))}
  </Modal>
);

export default WorkModal;
