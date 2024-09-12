import React from "react";
import styles from "./projectStyles.module.css";
import viber from "../assets/viberr.png";
import project2 from "../assets/fresh-burger.png"
import project3 from "../assets/hipsster.png"
import ProjectCards from "../common/ProjectsCard";


function Project() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">projects</h1>
      <div className={styles.ProjectContainer}>
        <ProjectCards
          src={viber}
          link={"https://www.google.co.uk/"}
          h3="variable project"
          p="project detail"
        />

        <ProjectCards
          src={project2}
          link={"https://www.google.co.uk/"}
          h3="variable project2"
          p="project detail2"
        />

        <ProjectCards
          src={project3}
          link={"https://www.google.co.uk/"}
          h3="variable project3"
          p="project detail3"
        />
      </div>
    </section>
  );
}

export default Project;
