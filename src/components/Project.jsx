import React from "react";
import Skill from "./Skill";
import { projects, technologies } from "../constans";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

const CardProject = ({ project }) => {
  return (
    <figure className="relative text-center   lg:flex  rounded-xl p-8 lg:p-3 hover:bg-slate-600 gap-3">
      <Link to={"https://google.com"}>
        <div className="absolute top-2 right-2">
          <img src={github} alt="" className="w-6 h-6" />
        </div>
      </Link>
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none  mx-auto"
        src={project?.img}
        alt=""
        width="384"
        height="512"
      />
      <div className="flex flex-col lg:justify-between text-center md:text-left space-y-4">
        <Link className="w-fit" to={"https://google.com"}>
          <h2 className="text-lg m-0 w-fit text-center">{project?.nombre}</h2>
        </Link>
        <blockquote>
          <p className="text-md font-medium">{project?.descripcion}</p>
        </blockquote>
        <Skill technologies={project?.technologies} size={3} />
      </div>
    </figure>
  );
};

const Project = () => {
  return (
    <div>
      <h2 className="text-lg text-white">Projectos</h2>

      <ul className="sm:flex sm:flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6">
        {projects?.map((project) => (
          <li className="">
            <CardProject project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
