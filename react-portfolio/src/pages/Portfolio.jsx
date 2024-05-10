// import React, { useState } from 'react'

const Portfolio = () => {
  const projectArray = [
    {
      title: "Project 1",
      image: "/image.png",
      deploy: "https://github.com/Lovertab/timesavor",
      github: "https://github.com/Lovertab/timesavor"
    },
    {
      title: "Project 2",
      image: "/image.png",
      deploy: "www.google.com",
      github: "www.google.com"
    },
  ]
  return (
    <>
      <section>
        <div>Projects</div>
        {projectArray.map(item => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <a href={item.deploy} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} />
            </a>
          <a href={item.github} target="_blank" rel="noopener noreferrer">Github code link</a>
        </div>
        ))}
        
      </section>

    </>
  );
};

export default Portfolio;
