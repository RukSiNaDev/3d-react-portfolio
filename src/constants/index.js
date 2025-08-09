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

export const aboutMe = [
  {
    box1: [
      {
        titleTh: 'สวัสดีค่ะ รักษิณา ค่ะ',
        titleEn: 'Hi, I’m Ruksina Prommee',
        descTh:'มีประสบการณ์ 5 ปีในการพัฒนา frontend และได้ฝึกฝนตัวเองอย่างจริงจังในการจัดการงานทั้ง frontend และ backend',
        descEn:'I have 5 years of experience in frontend development and have proactively trained myself to handle both frontend and backend tasks.',
      }
    ], 
    box2: [
      {
        titleTh: 'เทคโนโลยีที่ใช้',
        titleEn: 'Tech Stack',
        descTh: 'ฉันมีความเชี่ยวชาญด้านภาษา เฟรมเวิร์ก และเครื่องมือต่างๆ มากมายที่ช่วยให้ฉันสร้างแอปพลิเคชันที่แข็งแกร่งและปรับขนาดได้',
        descEn: 'I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications'
      }
    ], 
    box3: [
      {
        headerTh: 'สามารถทำงานร่วมกับทีมที่ใช้ภาษาไทยและภาษาอังกฤษได้อย่างคล่องแคล่ว และยืดหยุ่นต่อการปรับเวลาสื่อสารให้เหมาะสม',
        headerEn: "I'm comfortable working with both Thai and English-speaking teams and flexible with communication schedules Stack",
        descTh: 'พื้นที่ทำงานอยู่ที่กรุงเทพฯ ประเทศไทย และเปิดรับงานแบบรีโมทภายในประเทศ',
        descEn: "I'm based in Bangkok, Thailand, and open to remote work within the country."
      }
    ],
    box4: [
      {
        titleTh: 'ความหลงใหลในการเขียนโปรแกรม',
        titleEn: 'My Passion for Coding',
        descTh: 'ฉันชื่นชอบการแก้ปัญหาและสร้างสรรค์สิ่งต่าง ๆ ผ่านการเขียนโค้ด การเขียนโปรแกรมไม่ใช่แค่อาชีพ —แต่มันคือความหลงใหล ฉันรู้สึกสนุกกับการเรียนรู้เทคโนโลยีใหม่ ๆ และพัฒนาทักษะของตัวเองอยู่เสมอ',
        descEn: 'I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.'
      }
    ],
    box5: [
      {
        headerTh: 'ติดต่อ',
        headerEn: 'Contact me'
      }
    ],
  }
]

export const myProjects = [
  {
    title: '🥚 Egg Timer Web App',
    descTh: 'เว็บแอปที่น่ารักและเรียบง่ายที่จะช่วยให้คุณต้มไข่ได้อย่างต้องการ!',
    descEn: 'A fun and simple web app to help you boil eggs perfectly every time!',
    subdescTh:
      '✅ เลือกไข่ลวก ไข่ลวกปานกลาง หรือไข่ลวกสุก \n✅ ภาพเคลื่อนไหว GIF ไข่ เพื่อประสบการณ์ที่น่าดึงดูดใจ \n✅ ตัวจับเวลาถอยหลัง \n✅ UI ที่รองรับทั้งบนมือถือและเดสก์ท็อป\n✅ รองรับ PWA สำหรับการใช้งานแบบออฟไลน์ \n✅ การแจ้งเตือนเมื่อไข่ต้มสุกแล้ว',
    subdescEn:
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
    descTh: 'นี่คือโปรเจ็กต์ฝึกฝน fullstack authentication ซึ่งประกอบด้วยการเข้าสู่ระบบขั้นพื้นฐาน การลงทะเบียน การจัดการโทเค็น JWT และการควบคุมการเข้าถึงตามบทบาท',
    descEn: 'This is a fullstack authentication practice project. It includes basic login, registration, JWT token handling, and role-based access control.',
    subdescTh:
      '✅ ลงทะเบียนด้วยชื่อผู้ใช้ อีเมล รหัสผ่าน บทบาท และหมายเลขโทรศัพท์มือถือ\n✅ เข้าสู่ระบบด้วยการสร้าง token JWT\n✅ การแฮชรหัสผ่านโดยใช้ BCrypt.Net\n✅ จัดเก็บโทเค็นในที่เก็บข้อมูลในเครื่อง (กำหนดค่าได้)\n✅ AuthGuard เพื่อปกป้องเส้นทางและตรวจสอบวันหมดอายุของ token\n✅ การเข้าถึงตามบทบาท (เช่น ผู้ดูแลระบบสามารถเข้าถึง /user-list ได้)\n✅ สลับระหว่าง API จริงและโหมด JSON จำลองสำหรับการทดสอบ\n✅ ออกจากระบบอัตโนมัติเมื่อ token หมดอายุ\n✅ การกำหนดเส้นทางการเข้าถึง',
    subdescEn:
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
    jsPosition: isSmall ? [5, -7, 0] : isMobile ? [5, -7, 0] : isTablet ? [5, -7, 4] : [12, -5.5, 0],
    reactLogoPosition: isSmall ? [-2, 4, 2] : isMobile ? [5, 4, 0] : isTablet ? [-8, 5, -5] : [-11, -5, -5],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    nameTh: 'บริษัท ไทยประกันชีวิต จำกัด',
    nameEn: 'THAI LIFE INSURANCE',
    pos: 'Frontend Developer (OS)',
    duration: '2022 - 2024',
    titleTh: '• มีส่วนร่วมในการพัฒนา Front-end และการทำงานร่วมกันภายในทีม \n• รับผิดชอบการพัฒนา ส่วนติดต่อผู้ใช้ (UI) ของแอปพลิเคชัน ตามแบบดีไซน์และความต้องการที่ได้รับ \n• พัฒนา Front-end สำหรับแอปพลิเคชันระดับองค์กร 3 แอป เพื่อให้ทำงานได้ราบรื่นและสร้างความพึงพอใจให้ผู้ใช้(ฝ่ายขาย) \n• พัฒนา UI ที่ตอบสนองต่อทุกขนาดหน้าจอ (Responsive UI) ด้วย HTML5, CSS3, JavaScript และ Ionic4 Framework บน Angular \n• แก้ไขปัญหาทางเทคนิคและสนับสนุนการดีบักในสภาพแวดล้อมการทำงานเป็นทีม \n• ทำงานในทีม Agile ใช้ GitLab และ Jira สำหรับการจัดการซอร์สโค้ด วางแผนสปรินต์ และติดตามปัญหา',
    titleEn: '• Member of a development team, contributing to front-end development and team collaboration.\n• Responsible for developing application front-end interfaces based on provided designs and requirements.\n• Led front-end development for 3 enterprise applications, ensuring smooth performance and user satisfaction.\n• Developed responsive UI components using HTML5, CSS3, JavaScript, and Ionic4 framework based on Angular.\n• Resolved technical issues and supported debugging in a team environment.\n• Worked in Agile teams using GitLab, Jira for source control, sprint planning, and issue tracking.',
    icon: './assets/company1.png',
    animation: 'victory',
  },
  {
    id: 2,
    nameTh: 'บริษัท อีไอบิซ จำกัด',
    nameEn: 'EIBIZ CO.,LTD',
    pos: 'Frontend Developer',
    duration: '2020 - 2022',
    titleTh: '• พัฒนาและดูแล ส่วนติดต่อผู้ใช้ (UI) ของเว็บแอปพลิเคชัน ด้วย HTML5, CSS3, Sass, styled-components, JavaScript, React และ Material UI \n• ทำงานร่วมกับทีม และเพื่อนร่วมทีมชาวต่างชาติ ใช้ภาษาอังกฤษในการสื่อสาร การประชุม และการรีวิวโค้ด \n• พัฒนาเว็บแอปพลิเคชันให้ รองรับทุกขนาดหน้าจอ ทั้งบนเว็บและมือถือ \n• Deploy เว็บแอปพลิเคชันทั้งในระบบ On-Premise และ On-Cloud ด้วย Amazon S3 \n• เพิ่มฟีเจอร์ดีบักในแอปพลิเคชัน C# บน Windows เพื่อบันทึก API logs ลงไฟล์ ช่วยให้ง่ายต่อการวิเคราะห์ปัญหา \n• มีประสบการณ์ใช้ Git, Postman และ Azure สำหรับควบคุมเวอร์ชันและจัดการโครงการแบบ Agile',
    titleEn: '• Developed and maintained web interfaces for internal systems and Aurora application using HTML5, CSS3, Sass, and React with Material UI. \n• Collaborated closely with international senior team members using English for daily communication, discussions, and code reviews.\n• Handle responsive web application and mobile design\n• Deployed the web application both On-Premise and On-Cloud using Amazon S3.\n• Implemented a debugging feature in a C# Windows application to write API logs to a file for easier analysis.\n• Experienced with Git, Postman, and Azure for version control and agile project management.',
    icon: './assets/company2.jpg',
    animation: 'clapping',
  }
];
