const Card = ({ project }) => (
  <div className="flex flex-col justify-center overflow-hidden w-full text-center">
    <a
      href={project?.url}
      className="w-full h-full overflow-hidden"
      target="_blank"
    >
      <div className="w-full h-4/5 overflow-hidden">
        <img
          src={project.img}
          alt="project"
          className="w-full h-full transform hover:grayscale-0 hover:scale-110  transition duration-500 ease-in-out rounded-md object-cover"
        />
      </div>
      <p className="text-black font-bold mt-4">{project?.name}</p>
    </a>
  </div>
);

export default Card;
