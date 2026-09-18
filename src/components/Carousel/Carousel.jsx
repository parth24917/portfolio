import React from "react";
import Card from "../../components/Card/Card";

import styles from "../../components/Carousel/Carousel.module.css";

import tour from "../../assets/tourism.png";
import sport from "../../assets/sport.png";
import shop from "../../assets/shop.png";
import newr from "../../assets/new.png";
import movie from "../../assets/movie.png";

const CarouselComponent = () => {
  const items = [
    {
      image: tour,
      heading: "Tourism Website",
      description:
        "Developed a full-stack MERN tourism website to showcase travel packages, enabling users to browse and submit inquiries stored in MongoDB. The backend uses Node.js and Express, while the React frontend offers a dynamic experience.",
      demoLink: "https://travel-react-alpha.vercel.app/",
      sourceLink: "https://github.com/parth24917/travel-react",
    },
    {
      image: movie,
      heading: "Movie Browser",
      description:
        "Built a responsive Movie Browser app using ReactJS with dynamic data from a third-party API, custom hooks for managing favorites, and interactive features like real-time search and detail pages.",
      demoLink: "https://movie-browser-alpha.vercel.app/",
      sourceLink: "https://github.com/parth24917/movie-browser",
    },
    {
      image: sport,
      heading: "Sport&Skillz",
      description:
        'Built "Sport & Skillz," a sports-themed website using HTML, CSS, JavaScript, PHP, and MySQL. It provides rules for football, cricket, and volleyball, with user responses stored in a MySQL database.',
      demoLink: "https://parth24917.github.io/Sport-Skillz/",
      sourceLink: "https://github.com/parth24917/Sport-Skillz",
    },
    {
      image: shop,
      heading: "ProductList",
      description:
        "Built a product listing webpage with the MERN stack, seeding products into MongoDB and dynamically fetching them for display. Each product features a name, image, price, and Buy Now button.",
      demoLink: "https://example.com/demo4",
      sourceLink: "https://example.com/source4",
    },
    {
      image: newr,
      heading: "Contact Manager",
      description:
        "Developed a backend for a Contact Manager application using Node.js, Express, and MongoDB, supporting full CRUD functionality with efficient routing and RESTful APIs.",
      demoLink: "https://github.com/parth24917/CRUD_API",
      sourceLink: "https://github.com/parth24917/CRUD_API",
    },
  ];

  return (
    <div className={styles.carouselcontainer}>
      <div className={styles.carouseltrack}>
        {items.map((item, index) => (
          <div className={styles.carouselitem} key={index}>
            <Card
              image={item.image}
              showImage={true}
              heading={item.heading}
              description={item.description}
              demoLink={item.demoLink}
              sourceLink={item.sourceLink}
              titleFont="Sentient"
              descriptionFont="Calibri"
              demoBtText="Live Demo"
              sourceBtText="View Source Code"
              height={500}
              width={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;