export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail' | 'resume' | 'medium';
  profile?: {
    bio: string;
    details?: string;
  };
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  liveHref: string;
  githubHref: string;
  tech: string[];
  year: string;
  type?: 'website' | 'app'; // 'website' redirects directly, 'app' shows detail page
  appDownloadUrl?: string; // APK/App download link
  appScreenshots?: string[]; // Array of screenshot paths for app detail page
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  type: string;
  tech: string[];
  summary: string;
};

export type EducationItem = {
  school: string;
  program: string;
  duration: string;
  type: string;
  notes: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Connect', href: '#connect' }
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/PriyanshA0/',
    icon: 'github',
    profile: {
      bio: 'Full-stack developer passionate about building practical applications',
      details: 'Open source contributor | Building with React, Next.js & modern JS'
    }
  },
  {
    label: 'Twitter/X',
    href: 'https://x.com/Priyanshu_A24',
    icon: 'twitter',
    profile: {
      bio: 'Sharing thoughts on web development and tech insights',
      details: 'Web dev | App development | Open source'
    }
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/priyanshu-mishra-a02a8036b',
    icon: 'linkedin',
    profile: {
      bio: 'Backend Developer | Full-stack developer with focus on frontend',
      details: 'Intern at Exxat | Building scalable web solutions'
    }
  },
  {
    label: 'Mail',
    href: 'mailto:priyanshumishra081@gmail.com',
    icon: 'mail',
    profile: {
      bio: 'Get in touch via email',
      details: 'priyanshumishra081@gmail.com'
    }
  },
  {
    label: 'Resume',
    href: '/resume/Priyanshu Mishra.pdf',
    icon: 'resume',
    profile: {
      bio: 'Download my professional resume',
      details: 'Full-stack developer CV | Experience & Skills'
    }
  },
  {
    label: 'Contributions',
    href: 'https://github.com/PriyanshA0/?tab=contributions',
    icon: 'resume',
    profile: {
      bio: 'View my GitHub contributions and projects',
      details: '300+ contributions in 2024'
    }
  },
  {
    label: 'Medium',
    href: 'https://medium.com/',
    icon: 'medium',
    profile: {
      bio: 'Technical articles and writing',
      details: 'Coming soon with tech insights'
    }
  }
];

export const aboutParagraphs = [
  "I'm Priyanshu Mishra, a full-stack developer and APP Developer passionate about building practical, user-focused applications. I enjoy creating solutions that solve real problems while maintaining clean code and thoughtful design.",
  "My focus is on frontend development, full-stack systems, and turning ideas into products that actually work. I care about shipping with quality and attention to detail.",
  "When I'm not coding, I'm exploring new technologies, learning from the community, and working on projects that have real-world impact."
];

export const aboutPoints = [
  'Full-stack development with focus on frontend technologies and user experience',
  'Building with React, Next.js, and modern JavaScript ecosystems',
  'Passionate about creating practical solutions with clean, maintainable code'
];

export const allProjects: ProjectItem[] = [
  {
    title: 'ContentIO',
    description: 'A content management and publishing platform for creating, organizing, and sharing digital content.',
    image: '/img/projects/contentio.png',
    liveHref: 'https://get-contentio.vercel.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    year: '2026',
    type: 'website'
  },
  {
    title: 'Code Visualization',
    description: 'A web app for visualizing code behavior and making programming concepts easier to understand.',
    image: '/img/projects/codeVisualization.png',
    liveHref: 'https://code-visualization.vercel.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Next.js', 'React', 'JavaScript', 'Visualization'],
    year: '2026',
    type: 'website'
  },
  {
    title: 'Find Monsters',
    description: 'An educational puzzle game for learning and identifying different monster characters.',
    image: '/img/projects/Monster.png',
    liveHref: '/app/find-monsters',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Flutter', 'Dart', 'Node.js'],
    year: '2023',
    type: 'app',
    appScreenshots: [
      '/img/monsters/monster1.jpeg',
      '/img/monsters/monster2.jpeg',
      '/img/monsters/monster3.jpeg',
      '/img/monsters/monster4.jpeg'
    ]
  },
  {
    title: 'Open Gle Omegal',
    description: 'A random chat-style web app inspired by Omegle for open-ended online conversations.',
    image: '/img/projects/opengle.png',
    liveHref: 'https://open-gle.web.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Next.js', 'React', 'Firebase', 'Chat'],
    year: '2026',
    type: 'website'
  },
  {
    title: 'Solve Surprise Puzzle',
    description: 'A prank-style web app that reveals a scam warning after a surprise interaction.',
    image: '/img/projects/surpricePuzzel.png',
    liveHref: 'https://solve-surprise-puzzle.web.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['JavaScript', 'Animation', 'UI Effects'],
    year: '2026',
    type: 'website'
  },
  {
    title: 'Web Cam',
    description: 'A webcam experience with Mac-like hand gesture detection and emoji effects.',
    image: '/img/projects/webCam.png',
    liveHref: 'https://web-cam-62e40.web.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['JavaScript', 'Media APIs', 'Canvas'],
    year: '2026',
    type: 'website'
  },
  {
    title: 'Live Streak',
    description: 'A 60-day streak challenge game built around filling boxes like a LinkedIn progress board.',
    image: '/img/projects/liveStreak.png',
    liveHref: 'https://live-streak.web.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['React', 'JavaScript', 'Game Logic'],
    year: '2026',
    type: 'website'
  },
  {
    title: 'Talksy',
    description: 'An interactive chat and communication platform with real-time messaging capabilities.',
    image: '/img/projects/talksy.png',
    liveHref: '/app/talksy',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Flutter', 'Dart', 'Node.js', 'PHP'],
    year: '2024',
    type: 'app',
    appDownloadUrl: 'https://drive.google.com/uc?export=download&id=1rZL8IexfGCsMII6CKs71bY0-zHyobCtV',
    appScreenshots: [
      '/img/talksy/screenshots/1.png',
      '/img/talksy/screenshots/2.png',
      '/img/talksy/screenshots/3.png',
      '/img/talksy/screenshots/4.png',
      '/img/talksy/screenshots/5.png',
      '/img/talksy/screenshots/6.png',
      '/img/talksy/screenshots/7.png'
    ]
  },
  {
    title: 'Food Share',
    description: 'A community platform for reducing food waste by connecting surplus food with those in need locally.',
    image: '/img/projects/foodshare.png',
    liveHref: '/app/food-share',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Flutter', 'Dart', 'Node.js', 'Vercel'],
    year: '2025',
    type: 'app',
    appDownloadUrl: 'https://drive.google.com/file/d/1XKU9NvKmX20qLkjDujimq28pjPo25-GZ/view?usp=drive_link',
    appScreenshots: [
      '/img/foodshare/1.jpeg',
      '/img/foodshare/2.jpeg',
      '/img/foodshare/3.jpeg',
      '/img/foodshare/4.jpeg',
      '/img/foodshare/5.jpeg'
    ]
  },
  {
    title: 'Hunter HTML Editor',
    description: 'A lightweight HTML editor built with vanilla JavaScript for quick web development and prototyping.',
    image: '/img/projects/html-css-js.png',
    liveHref: '/app/hunter-html-editor',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Flutter', 'Dart', 'Node.js'],
    year: '2023',
    type: 'app',
    appDownloadUrl: 'https://drive.google.com/uc?export=download&id=16GriqbAZjhs-Vqw_B7co5U7l6BpJsajY',
    appScreenshots: [
      '/img/html_code/hunter_screen1.jpeg',
      '/img/html_code/hunter_screen2.jpeg',
      '/img/html_code/code1.jpeg',
      '/img/html_code/code2.jpeg',
      '/img/html_code/code3.jpeg'
    ]
  },
  {
    title: 'Bubble Pixel Game',
    description: 'An interactive bubble-popping game with engaging gameplay mechanics and smooth animations.',
    image: '/img/projects/bubblePixel.png',
    liveHref: 'https://bubble-pixel.web.app/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML5 Canvas', 'JavaScript', 'Game Dev'],
    year: '2023',
    type: 'website'
  },
  {
    title: 'Merge and Double',
    description: 'A puzzle game where you merge tiles to reach higher numbers, inspired by 2048.',
    image: '/img/projects/mergeDouble.png',
    liveHref: '/app/merge-and-double',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Flutter', 'Dart', 'Node.js'],
    year: '2023',
    type: 'app',
    appDownloadUrl: 'https://drive.google.com/uc?export=download&id=1uxM5rUS8F_FddJ1lF5SHlThn43TQEb-C',
    appScreenshots: [
      '/img/Merge_and_double/merge1.jpeg',
      '/img/Merge_and_double/merge2.jpeg',
      '/img/Merge_and_double/merge3.jpeg'
    ]
  },
  {
    title: 'Fun Learn',
    description: 'An interactive learning platform designed to make education engaging and enjoyable.',
    image: '/img/projects/funLearn.png',
    liveHref: '/app/fun-learn',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Flutter', 'Dart', 'Node.js'],
    year: '2023',
    type: 'app',
    appDownloadUrl: 'https://drive.google.com/uc?export=download&id=14rB8vIjyNzGz-D3qmsuM-Jp9KcnnBby2',
    appScreenshots: [
      '/img/fun/fun1.jpeg',
      '/img/fun/fun2.jpeg',
      '/img/fun/fun3.jpeg',
      '/img/fun/fun4.jpeg'
    ]
  },
  // {
  //   title: 'HTML CSS Tutorial',
  //   description: 'A comprehensive tutorial website for learning HTML and CSS fundamentals with practical examples.',
  //   image: '/img/html_code/code2.jpeg',
  //   liveHref: 'https://html-css-tutorial.vercel.app/',
  //   githubHref: 'https://github.com/PriyanshA0/',
  //   tech: ['HTML', 'CSS', 'Educational'],
  //   year: '2023',
  //   type: 'website'
  // },
  // {
  //   title: 'Python Guide',
  //   description: 'A detailed guide and tutorial for learning Python programming from basics to advanced concepts.',
  //   image: '/img/projects/project-placeholder.svg',
  //   liveHref: 'https://python-guide.vercel.app/',
  //   githubHref: 'https://github.com/PriyanshA0/',
  //   tech: ['Python', 'Educational', 'Documentation'],
  //   year: '2023',
  //   type: 'website'
  // },
  // {
  //   title: 'C++ OOP',
  //   description: 'Educational resource covering Object-Oriented Programming concepts in C++ with practical examples.',
  //   image: '/img/projects/project-placeholder.svg',
  //   liveHref: 'https://cpp-oop-guide.vercel.app/',
  //   githubHref: 'https://github.com/PriyanshA0/',
  //   tech: ['C++', 'OOP', 'Educational'],
  //   year: '2023',
  //   type: 'website'
  // }
];

// Featured projects shown on home page
export const projects: ProjectItem[] = allProjects.slice(0, 3);

export const experience: ExperienceItem[] = [
  {
    company: 'Akreation',
    role: 'Backend Developer Intern',
    duration: '11.2025 - 04.2026',
    type: 'Internship',
    tech: ['Next.js', 'Flutter', 'MongoDB', 'React', 'Node.js'],
    summary: 'Built and tested backend features with a focus on reliability, maintainability, and clean service boundaries.'
  },
  {
    company: 'Vision Software LMT',
    role: 'Developer Intern',
    duration: '04.2025 - 07.2025',
    type: 'Summer Internship',
    tech: ['Python', 'Flutter', 'Node.js', 'MySQL',],
    summary: 'Worked on small product automations and experimentation around AI-assisted developer workflows.'
  }
];

export const education: EducationItem[] = [
  {
    school: 'Shree L R Tiwari College',
    program: 'B.Sc - Computer Science',
    duration: 'Pursuing',
    type: 'University',
    notes: 'Building strong foundations in computer science and software development.'
  },
  {
    school: 'VIVA Institute of Technology',
    program: 'Diploma - AI/ML Engineering',
    duration: '2024',
    type: 'Institute',
    notes: 'Explored AI and Machine Learning technologies. Discontinued to pursue full-stack development.'
  },
  {
    school: 'Vidya Varidhi Vidyalaya',
    program: '10th & 12th Standard - Science',
    duration: '2021 - 2023',
    type: 'School',
    notes: 'Completed 12th with focus on science and mathematics. Graduated with 64% in 12th and 74% in 10th.'
  }
];

export const githubActivity = {
  year: 2026,
  total: 322,
  weeks: [
    [0, 0, 1, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 2, 3, 2, 1, 1, 2, 3, 2, 1, 0, 1, 2, 3, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 2, 3, 3, 3, 2, 2, 3, 4, 2, 1, 1, 1, 2, 3, 2, 1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 2, 2, 3, 4, 3, 3, 2, 1, 1, 0, 1, 3, 4, 3, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 2, 2, 3, 3, 4, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 2, 2, 2, 3, 1, 1, 0, 0, 2, 3, 4, 3, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 2, 2, 1, 0, 0, 0, 1, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

export const musicCard = {
  title: 'Building in Public',
  artist: 'Priyanshu Mishra',
  label: 'Currently working on',
  cover: '/assets/My-Img/music.png',
  spotifyUrl: 'https://open.spotify.com/track/6LAitVJIwyCy4bJGN9TIhn?si=DAAL6gM0QI-Fq4-1jAoxIQ'
};

export const footerNote = '© 2025 Priyanshu Mishra. Built with passion and a lot of code.';
