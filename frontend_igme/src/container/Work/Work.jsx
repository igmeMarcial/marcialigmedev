import React, { useEffect, useState } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import Project from "./Project";
import { Grid } from "@mui/material";
// import Fade from 'react-reveal/Fade';
import { urlFor, client } from "../../client";

export const blueThemeDark = {
  type: "dark",
  primary600: "#171717",
  secondary: "#0d1117",
  secondary70: "#212121b3",
  secondary50: "#21212180",
  tertiary: "#eaeaea",
  tertiary80: "#eaeaeacc",
  tertiary70: "#eaeaeab3",
  tertiary50: "#eaeaea80",
  bgCard: "rgb(22 27 34/1)",
};

function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      // console.log(data)
    });
  }, []);

  return (
    <motion.div
      id="portafolio"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="igme__work"
    >
      {/* <Fade left> */}
      <h2 className=" igme__title title-works">
        Algunas cosas que he <span>Construido</span>
      </h2>
      {/* </Fade> */}

      <div className="project-container">
        <Grid
          className="project-grid"
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {projects.map((project) => (
            <Project
              theme={blueThemeDark}
              key={project.id}
              id={project.id}
              name={project.title}
              desc={project.description}
              tags={project.tags}
              code={project.codeLink}
              demo={project.projectLink}
              image={urlFor(project.imgUrl)}
            />
          ))}
        </Grid>
      </div>
    </motion.div>
  );
}

export default Work;
