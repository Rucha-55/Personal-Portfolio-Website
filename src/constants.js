// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import flaskLogo from './assets/tech_logo/flask.png';
import djangoLogo from './assets/tech_logo/django.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render.jpeg';
import phpLogo from './assets/tech_logo/php.png';

// Backend and database logos
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postgresqlLogo from './assets/tech_logo/postgre.png';
import firebaseLogo from './assets/tech_logo/firebase.png';

// Experience Section Logo's
import mahindraLogo from './assets/company_logo/mahindra_logo.png';
import winjitLogo from './assets/company_logo/winjit.jpeg';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import kkwLogo from './assets/education_logo/kkw.jpeg';
import bpPatilLogo from './assets/education_logo/bppatil.jpeg';
import bhimashankarLogo from './assets/education_logo/bhimashankar.jpeg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import project from './assets/work_logo/project.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'React Native', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'Django', logo: djangoLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgresqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: winjitLogo,
    role: "Data Science Developer",
    company: "Grapes Farm Planner (Hackathon Project)",
    date: "May 2025 - Present",
    desc: "This project is sponsored by WinJit. Engineered a crop planning and resource management system for grape farming, leveraging data analytics and scheduling algorithms to optimize agricultural workflows. Utilized Python and pandas for data processing, and employed Jupyter Notebooks to visualize seasonal patterns and yield predictions. Focused on modular design principles, intuitive data dashboards, and scalable code architecture, aiming to improve farming efficiency and decision-making for vineyard management.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Pandas",
      "Jupyter Notebooks",
      "Data Visualization",
      "Keras",
      "Machine Learning",
      "Agricultural Data Analysis",
      "Crop Scheduling",
      "Git",
      "GitHub",
      "VS Code"
    ],
  },
  {
    id: 1,
    img: mahindraLogo,
    role: "Mobile Developer",
    company: "MahindraChatbot (Personal Project)",
    date: "June 2025 - Present",
    desc: "Built a cross-platform chatbot-powered Android application using React Native and Expo, integrating Firebase services for backend functionality. Designed and implemented file-based routing, developed intuitive user interfaces, and configured project-level tooling for performance and code quality. Emphasized modular architecture and maintainability using TypeScript and ESLint while working in a structured development environment.",
    skills: [
      "React Native",
      "Expo",
      "JavaScript",
      "TypeScript",
      "Firebase",
      "VS Code"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: kkwLogo,
    school: "K.K. Wagh Institute of Engineering Education and Research, Nashik",
    date: "Sept 2022 - Present",
    grade: "9.10 CGPA",
    desc: "I am currently pursuing my B.Tech in Computer Engineering at K.K. Wagh Institute, where I've cultivated practical and theoretical expertise in modern computing. My coursework spans across Machine Learning, System Design, Mobile and Web Development, and Cloud Technologies. I've actively contributed to academic and personal projects that emphasize scalable architecture, efficient coding practices, and real-world problem-solving. This program has strengthened my ability to work in collaborative development environments while refining my critical thinking and engineering mindset.",
    degree: "B.Tech (Computer Engineering)",
  },
  {
    id: 1,
    img: bpPatilLogo,
    school: "Late B.P. Patil Jr. College of Science, Pimpalgaon Baswant",
    date: "Apr 2019 - Mar 2021",
    grade: "95%",
    desc: "I completed my Class 12 education under the Maharashtra State Board from Late B.P. Patil Jr. College of Science, where I studied Physics, Chemistry, Mathematics, and Biology (PCMB). This academic phase strengthened my analytical and scientific foundation, and equipped me with the discipline and curiosity needed for higher studies in technology and engineering.",
    degree: "State Board (XII) – PCMB",
  },
  {
    id: 2,
    img: bhimashankarLogo,
    school: "Bhimashankar Secondary School, Pimpalgaon Baswant",
    date: "Apr 2018 – Mar 2019",
    grade: "89%",
    desc: "I completed my Class 10 education under the Maharashtra State Board from Bhimashankar Secondary School, where I studied Science along with Computer Application. This phase laid a strong academic foundation and sparked my interest in technology, setting the stage for my future pursuits in computer science and engineering.",
    degree: "State Board (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Grapes Disease Detection & Farm Planner",
    description:
      "An intelligent farming solution that combines disease detection using deep learning and comprehensive farm planning. The system uses computer vision to identify grape diseases and provides optimized crop planning recommendations based on data analytics.",
    image: project,
    tags: ["Python", "TensorFlow", "Keras", "Data Science", "Machine Learning", "Farm Management"],
    github: "https://github.com/Rucha-55/grapes-farm-planner",
    webapp: "",
  },
  {
    id: 1,
    title: "Krushigandha Agro - Cattle Feed Website",
    description:
      "A comprehensive e-commerce website for Krushigandha Agro, specializing in cattle feed products. Features include product catalog, online ordering system, company information, and location details. Built with modern web technologies to provide a seamless user experience for farmers and livestock owners.",
    image: project,
    tags: ["SQL", "Django", "HTML","CSS", "JavaScript","E-commerce", "Responsive Design"],
    github: "https://github.com/Rucha-55/KrushigandhaAgro",
    webapp: "https://krushigandhaagro.onrender.com/",
  },
  {
    id: 2,
    title: "Pharmacy Management App",
    description:
      "A mobile application built with React Native and Expo for managing pharmacy operations. Features include medicine inventory management, customer records, sales tracking, and real-time notifications using Firebase. The app provides a seamless experience for pharmacy management on mobile devices.",
    image: project,
    tags: ["React Native", "Firebase", "Expo", "Mobile Development", "Real-time Data", "Pharmacy Management"],
    github: "https://github.com/Rucha-55/pharmacy-management-app",
    webapp: "",
  },
  {
    id: 3,
    title: "Pharmacy Management System",
    description:
      "A comprehensive web-based pharmacy management system built with PHP and MySQL. Features include medicine inventory management, customer management, sales tracking, and reporting. The system provides an intuitive interface for managing pharmacy operations efficiently.",
    image: project,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Web Development", "Database Management"],
    github: "https://github.com/Rucha-55/Pharmacy_Management_System",
    webapp: "",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description:
      "A responsive Netflix clone built with React.js and Tailwind CSS. Features include movie browsing, search functionality, and a modern streaming interface. The application fetches movie data from external APIs and provides a smooth user experience similar to Netflix.",
    image: project,
    tags: ["React JS", "API", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Movie Streaming"],
    github: "https://github.com/Rucha-55/Netflix-Clone",
    webapp: "",
  },
  {
    id: 5,
    title: "Diabetes Prediction App",
    description:
      "A web-based application that predicts the likelihood of diabetes using machine learning algorithms. Built with Python and deployed on Render, the app provides a user-friendly interface for medical professionals and patients to input health data and receive accurate predictions.",
    image: project,
    tags: ["Python", "Machine Learning", "Data Science", "Healthcare", "Web Development", "Flask"],
    github: "https://github.com/Rucha-55/Diabetes-Prediction",
    webapp: "https://diabetes-prediction-hn2z.onrender.com",
  }
];