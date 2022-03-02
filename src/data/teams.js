import teachla from "../img/teachla.svg";
import hack from "../img/hack.svg";
import board from "../img/board.svg";
import w from "../img/w.svg";
import icpc from "../img/icpc.svg";
import design from "../img/design.svg";
import ai from "../img/ai.svg";
import cyber from "../img/cyber.svg";
import studio from "../img/studio.svg";

const teams = [
    {
        logotype: teachla,
        name: "Teach LA",
        technologies: ["HTML/CSS/JS", "GitHub Actions", "SASS", "Firebase", "Go", "Redux", "Typescript"],
        projects: ["Static Site", "Learning Lab", "Editor Frontend + Backend"],
    },
    {
        logotype: hack,
        name: "Hack",
        technologies: ["HTML/CSS/JS", "React", "Gatsby", "Material UI"],
        projects: ["Hack Website", "HOTH Website", "Mentorq", "Discord Bot"],
    },
    {
        logotype: board,
        name: "Board",
        technologies: ["HTML/CSS/JS", "React", "Express", "Discord API", "PostgreSQL", "AWS", "Docker/Vagrant"],
        projects: ["ACM Website", "Membership Portal", "Discord Bot"],
    },
    {
        logotype: w,
        name: "W",
        technologies: ["HTML/CSS/JS", "React"],
        projects: ["W Website"],
    },
    {
        logotype: icpc,
        name: "ICPC",
        technologies: ["HTML/CSS/JS", "React", "Webpack"],
        projects: ["ICPC Webite", "Codesprint Website"],
    },
    {
        logotype: design,
        name: "Design",
        technologies: ["HTML/CSS/JS", "eleventy.js", "SASS"],
        projects: ["Design Styleguide", "UXLA", "Design Website"],
    },
    {
        logotype: ai,
        name: "AI",
        technologies: ["HTML/CSS", "Jekyll/Liquid", "React", "Jupyter Notebook", "Python"],
        projects: ["Learning Labs"],
    },
    {
        logotype: cyber,
        name: "Cyber",
        technologies: ["HTML/CSS", "Jekyll/Liquid", "React"],
        projects: ["Bruin Quest Website", "Learning Labs"],
    },
    {
         logotype: studio,
         name: "Studio",
         technologies: ["Game Art", "Twine"],
         projects: ["Games"],
    },
];

export default teams;
