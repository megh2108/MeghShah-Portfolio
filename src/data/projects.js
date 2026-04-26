import conveyorImg from '../assets/ConveyorIndustries_Image.png';
import patelShahImg from '../assets/PatelnShah_Image.png';
import portfolioImg from '../assets/Portfolio_Home_Image.png';

const projects = [
  {
    "id": 1,
    "title": "Conveyor Industries",
    "image": conveyorImg,
    "category": "Frontend",
    "year": "2024",
    "description": "Designed and developed a complete multi-page product catalog website for a leading industrial conveyor manufacturer serving sectors like Sugar Mills, Cement Plants, Dairy and Food Industry. Built a rich product gallery showcasing 30+ products across categories with image-based navigation. Implemented responsive layouts ensuring accessibility across desktop and mobile devices.",
    "technologies": ["HTML", "CSS3", "Javascript"],
    "github": "https://github.com/megh2108/ConveyorBelt_Website",
    "demo": "https://conveyorindustries.in/"
  },
  {
    "id": 2,
    "title": "PS e-Commerce Consultancy",
    "image": patelShahImg,
    "category": "Frontend",
    "year": "2024",
    "description": "A client project — a frontend website for an e-commerce consultancy built with React.js and CSS, highlighting services, case studies, and contact channels. Implemented responsive design for desktop and mobile with a contact form for inquiry submission.",
    "technologies": ["React.js", "JavaScript", "CSS3"],
    "github": "https://github.com/megh2108/PS_Ecommerce_Consultancy",
    "demo": "https://patelnshahecom.com/"
  },
  {
    "id": 3,
    "title": "Portfolio Website",
    "image": portfolioImg,
    "category": "Frontend",
    "year": "2024",
    "description": "Built a personal portfolio with reusable components and dynamic routing to showcase projects and skills. Optimized deployment using Vercel CI/CD, ensuring fast load times and seamless accessibility.",
    "technologies": ["React.js", "JavaScript", "Tailwind CSS"],
    "github": "https://github.com/megh2108/MeghShah-Portfolio",
    "demo": "https://meghshah-portfolio.vercel.app/"
  },
  {
    "id": 4,
    "title": "Training Record System",
    "image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    "category": "Full-Stack",
    "year": "2024",
    "description": "Developed a role-based system with authentication & authorization, improving operational efficiency. Applied reporting and training management modules, improving data tracking efficiency by 30%. Achieved high code quality with unit testing (xUnit, Jasmine/Karma) and modular architecture.",
    "technologies": ["Angular", ".Net Web API", "MS SQL"],
    "github": "https://github.com/megh2108/TrainingRecordSystem",
    "demo": ""
  }
];

export default projects;