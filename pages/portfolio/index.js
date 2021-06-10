// import whatsappimg from "";

import { useMemo, useState } from "react";
import Card from "./components/card";
import Filter from "./components/filter";

function Portfolio() {
  const projects = [
    {
      name: "SYFT LA",
      url: "https://app.syft.la/",
      img: "/syft.jpg",
      type: "typescript",
    },
    {
      name: "Top Shot",
      url: "https://topshotconsultants.com/",
      img: "/topshot.jpg",
      type: "next",
    },
    {
      name: "Hassanien",
      url: "https://topshotconsultants.com/",
      img: "/hassanien.jpg",
      type: "next",
    },
    {
      name: "WhatsApp Clone",
      url: "https://whatsapp-clone-opal-beta.vercel.app/",
      img: "/whatsapp-17389-3.jpg",
      type: "react",
    },
    {
      name: "M-GYM",
      url: "https://momadeen.github.io/madeen-gym.github.io/",
      img: "/gym.jpg",
      type: "html",
    },
    {
      name: "De-medican",
      url: "https://momadeen.github.io/DeMedican.github.io/index.html",
      img: "/medican.jpg",
      type: "html",
    },
    {
      name: "Budget",
      url: "https://momadeen.github.io/Madeen-budget.github.io/",
      img: "/budget.jpg",
      type: "html",
    },
    {
      name: "Photography",
      url: "https://momadeen.github.io/MadeenPH.github.io/",
      img: "/ph.jpg",
      type: "html",
    },
    {
      name: "Tip Calculator",
      url: "https://momadeen.github.io/tipCalc.github.io/",
      img: "/ph.jpg",
      type: "html",
    },
  ];

  const [projectFilter, setProjectFilter] = useState("");

  const filterProject = useMemo(() =>
    projects?.filter((project) =>
      projectFilter === "" ? projects : project.type === projectFilter
    )
  );

  return (
    <div className="flex flex-col">
      <Filter setProjectFilter={setProjectFilter} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {filterProject?.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
