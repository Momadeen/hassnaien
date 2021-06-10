import { useCallback, useState } from "react";

const Filter = ({ setProjectFilter }) => {
  const types = [
    { name: "All", stack: "" },
    { name: "React", stack: "react" },
    { name: "Next", stack: "next" },
    { name: "HTML", stack: "html" },
    { name: "Typescript", stack: "typescript" },
  ];
  const [active, setActive] = useState("");
  const onClick = useCallback((type) => {
    setActive(type?.stack);
    setProjectFilter(type?.stack);
  }, []);

  return (
    <div className="flex w-full justify-end">
      {types?.map((type) => (
        <p
          onClick={() => onClick(type)}
          className={
            active === type?.stack ? "font-bold mr-5" : "mr-5 cursor-pointer"
          }
        >
          {type?.name}
        </p>
      ))}
    </div>
  );
};

export default Filter;
