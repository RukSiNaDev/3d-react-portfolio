const base = import.meta.env.BASE_URL;

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
    name: 'Project',
    href: '#project',
  },
  {
    id: 4,
    name: 'Work Experience',
    href: '#work',
  },
];

export const myProjects = [
  {
    title: '🥚 Egg Timer Web App',
    desc: 'A fun and simple web app to help you boil eggs perfectly every time!',
    subdesc:
      '✅ Select from Soft Boiled, Medium Boiled, or Hard Boiled eggs \n✅ Animated egg GIFs for a visually engaging experience \n✅ Countdown timer with progress indicator \n✅ Responsive UI for mobile and desktop\n✅ PWA support for offline usage \n✅ Modal notification when the egg is ready',
    href: 'https://ruksinadev.github.io/egg-boiler/',
    texture: `${base}textures/project/project1.mp4`,
    logo: `${base}assets/project-logo2.png`,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${base}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${base}assets/react.svg`,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: `${base}assets/tailwindcss.png`,
      }
    ],
  },
  {
    title: 'Authentication Practice',
    desc: 'This is a fullstack authentication practice project. It includes basic login, registration, JWT token handling, and role-based access control.',
    subdesc:
      '✅ Register with username, email, password, role, and mobile number\n✅ Login with JWT token generation\n✅ Password hashing using BCrypt.Net\n✅ Store token in localStorage (configurable)\n✅ AuthGuard to protect routes and check token expiration\n✅ Role-based access (e.g., admin can access /user-list)\n✅ Switch between real API and mock JSON mode for testing\n✅ Auto logout on token expiry\n✅ Angular routing with access control',
    href: 'https://ruksinadev.github.io/auth-fullstack-demo/login',
    texture: `${base}textures/project/project2.mp4`,
    logo: `${base}assets/project-logo2.png`,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: `${base}assets/spotlight2.png`,
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: `${base}assets/angular.png`,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: `${base}assets/tailwindcss.png`,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: `${base}assets/typescript.png`,
      },
      {
        id: 4,
        name: 'CShrap',
        path: `${base}assets/cshrap.png`,
      }
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 3 : isMobile ? 3 : 4,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    jsPosition: isSmall ? [4, -7, 0] : isMobile ? [5, -7, 0] : isTablet ? [5, -7, 0] : [12, -5.5, 0],
    reactLogoPosition: isSmall ? [2, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'THAI LIFE INSURANCE',
    pos: 'Frontend Developer',
    duration: '2022 - 2024',
    title: "Developed and maintained front-end interfaces for 3 enterprise systems using HTML5, CSS3, JavaScript, and Ionic 4. Collaborated with cross-functional teams to ensure responsive UI and smooth user experience. Handled debugging, technical issue resolution, and implemented designs based on business requirements.",
    icon: './assets/company1.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Eibiz',
    pos: 'Frontend Developer',
    duration: '2020 - 2022',
    title: "Developed and maintained web interfaces for internal systems and Aurora application using HTML5, CSS3, Sass, and React with Material UI. Created interactive maps with Leaflet.js and supported mobile-responsive design. Collaborated with international teams and contributed to C# features under senior guidance.",
    icon: './assets/company2.jpg',
    animation: 'clapping',
  }
];
