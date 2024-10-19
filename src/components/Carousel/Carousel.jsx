import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.module.css';
import Card from "../../components/Card/Card"
import styles from "../../components/Carousel/Carousel.module.css"
import tour from "../../assets/tourism.jpg"
import sport from"../../assets/sport.png"
import shop from "../../assets/shop.png"
import newr from "../../assets/new.png"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const CarouselComponent = () => {
  const items = [
    {
      image: tour,
      heading: 'Tourism Website',
      description: 'Developed a full-stack MERN tourism website to showcase travel packages, enabling users to browse and submit inquiries stored in MongoDB. The backend uses Node.js and Express, while the React frontend offers a dynamic experience',
      demoLink: 'https://travel-react-alpha.vercel.app/',
      sourceLink: 'https://github.com/parth24917/travel-react',
      titleFont: 'Sentient', 
      descriptionFont: 'Calibri',
      demoBtText: 'Live Demo',
      sourceBtText: 'View Source Code',
    },
    {
      image: sport,
      heading: 'Sport&Skillz',
      description: 'Built "Sport & Skillz," a sports-themed website using HTML, CSS, JavaScript, PHP, and MySQL. It provides rules for football, cricket, and volleyball, storing user responses in a MySQL database via PHP, with a clean, responsive frontend for easy navigation.',
      demoLink: 'https://parth24917.github.io/Sport-Skillz/',
      sourceLink: 'https://github.com/parth24917/Sport-Skillz',
      titleFont: 'Sentient', 
      descriptionFont: 'Calibri',
      demoBtText: 'Live Demo',
      sourceBtText: 'View Source Code',
    },
    {
      image: shop,
      heading: 'ProductList',
      description: 'Built a product listing webpage with the MERN stack, seeding products into MongoDB and dynamically fetching them for display. Each product features a name, image, price, and "Buy Now" button, with a React frontend styled using HTML and CSS.',
      demoLink: 'https://example.com/demo4',
      sourceLink: 'https://example.com/source4',
      titleFont: 'Sentient', 
      descriptionFont: 'Calibri',
      demoBtText: 'Live Demo',
      sourceBtText: 'View Source Code',
    },
    {
      image: newr,
      heading: 'Contact Manager',
      description: 'Developed a backend for a Contact Manager application using Node.js, Express, and MongoDB, supporting full CRUD functionality with efficient routing and data management via RESTful APIs.',
      demoLink: 'https://github.com/parth24917/CRUD_API',
      sourceLink: 'https://github.com/parth24917/CRUD_API',
      titleFont: 'Sentient', 
      descriptionFont: 'Calibri',
      demoBtText: 'Live Demo',
      sourceBtText: 'View Source Code',
    },
   
  ];
 
     
  

  return (
    <Carousel responsive={responsive} className={styles.carouselcontainer}>
    {items.map((item, index) => (
      <div key={index} className={styles.carouselitem}>
        <Card
          image={item.image}
          showImage={true}
          heading={item.heading}
          description={item.description}
          demoLink={item.demoLink}
          sourceLink={item.sourceLink}
          titleFont={item.titleFont}
          descriptionFont={item.descriptionFont}
          demoBtText={item.demoBtText}
          sourceBtText={item.sourceBtText}
          height={500}
          width={400}
        />
      </div>
    ))}
    
    
    
    
  </Carousel>
  );
};

export default CarouselComponent;