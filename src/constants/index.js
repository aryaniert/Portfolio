export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Android Developer - TCS',
    desc: 'Developing and testing a feature-rich Android app for Nissan Automotive, enhancing user experience for in-car infotainment systems.  Collaborating on API development for seamless integration between the app and vehicle systems, optimizing performance and functionality.',
    subdesc:
      'Implementing HMI solutions to improve interaction between users and the vehicle’s infotainment platform. Working with both AOSP and AASP to integrate advanced infotainment features, ensuring reliability and high-quality performance.',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/android-studio-icon.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },

    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Android Studio',
        path: '/assets/android-studio-icon.png',
      },
      {
        id: 2,
        name: 'Kotlin',
        path: '/assets/kotlin.png',
      },
      {
        id: 3,
        name: 'JAVA',
        path: 'assets/java.png',
      },
      
    ],
  },
  {
    title: 'X-Growth -Full Stack Developer',
    desc: 'Developed XEmailVerify to filter invalid emails, reducing costs, and built XCampaign, optimizing email automation and deliverability across Google and Microsoft mail servers. Designed dynamic level-based email workflows with templating automation and implemented IMAP/SMTP protocols in a Node.js-based system for secure email handling.',
    subdesc:
      'Contributed to XGrowth, integrating AWS SES, Amazon S3, and Microsoft Azure to scale email infrastructure and improve campaign tracking.',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/x_growth.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/node.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'AWS',
        path: '/assets/aws.png',
      },
    ],
  },
  {
    title: 'Supista - Backend Developer',
    desc: 'Developed and optimized backend services using Node.js and MongoDB to ensure high performance and scalability. Integrated Agora.io and Socket.io for real-time communication and seamless user interactions.',
    subdesc:
      'Designed and implemented RESTful APIs to support front-end applications, improving usability and performance.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/supista.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/node.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'AWS',
        path: '/assets/aws.png',
      },
      {
        id: 4,
        name: 'Socket.io',
        path: '/assets/socket.png',
      },
      {
        id: 4,
        name: 'Agora.io',
        path: '/assets/agora.png',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.06 : isMobile ? 0.07 : 0.070,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [0, 7, 0] : isMobile ? [0, 11, 0] : isTablet ? [-15, 12, 0] : [-21, 10, -3],
    robotPlaygroundPosition: isSmall ? [-3, -4, 0] : isMobile ? [-5, -4, 0] : isTablet ? [-5, -4, 0] : [-12, -6, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    miniRobotPosition: isSmall ? [1, 0.5, 0] : isMobile ? [2, 0.8, 0] : isTablet ? [9, 0.8, 0] : [5, 1.5, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'TCS',
    pos: 'Android Developer',
    duration: '2023 - Present',
    title: "Developing and testing a feature-rich Android app for Nissan Automotive, enhancing user experience for in-car infotainment systems. Collaborating on API development for seamless integration between the app and vehicle systems, optimizing performance and functionality.",
    icon: '/assets/android-studio-icon.png',
    animation: 'victory',

  },
  {
    id: 2,
    name: 'X-Growth',
    pos: 'Full Stack Developer',
    duration: 'May-2022 - Oct-2022',
    title: "Developed XEmailVerify to filter invalid emails, reducing costs, and built XCampaign, optimizing email automation and deliverability across Google and Microsoft mail servers. Designed dynamic level-based email workflows with templating automation and implemented IMAP/SMTP protocols in a Node.js-based system for secure email handling.",
    icon: '/assets/x_growth.png',
    animation: 'clapping',

  },
  {
    id: 3,
    name: 'Supista',
    pos: 'Backend Developer',
    duration: '2022 - 2023',
    title: "Developed and optimized backend services using Node.js and MongoDB to ensure high performance and scalability. Integrated Agora.io and Socket.io for real-time communication and seamless user interactions.",
    icon: '/assets/supista.png',
    animation: 'salute',

  },
];
