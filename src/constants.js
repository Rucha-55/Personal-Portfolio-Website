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
    desc: "Engineered a crop planning and resource management system for grape farming, leveraging data analytics and scheduling algorithms to optimize agricultural workflows. Utilized Python and pandas for data processing, and employed Jupyter Notebooks to visualize seasonal patterns and yield predictions. Focused on modular design principles, intuitive data dashboards, and scalable code architecture, aiming to improve farming efficiency and decision-making for vineyard management.",
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
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];