import { img } from "../assets/index";
const { tecnologias, projectsImg } = img;
import pruebaProject from "../assets/Projects/prueba.png";
const {
  html,
  css,
  javascript,
  express,
  postgres,
  tailwind,
  reactjs,
  typescript,
  nodejs,
  git,
} = tecnologias;

const { perfil } = projectsImg;
export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Proyectos",
  },
  {
    id: "skill",
    title: "Habilidades",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git",
    icon: git,
  },
];

export const projects = [
  {
    id: 1,
    nombre: "Kiosko-app",
    img: pruebaProject,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 2,
    nombre: "Autoservice-app",
    img: pruebaProject,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 3,
    nombre: "Autoservice-app",
    img: pruebaProject,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 4,
    nombre: "Autoservice-app",
    img: pruebaProject,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 4,
    nombre: "Autoservice-app",
    img: pruebaProject,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
];
