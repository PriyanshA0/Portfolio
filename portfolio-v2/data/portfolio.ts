export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail' | 'resume' | 'medium';
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  liveHref: string;
  githubHref: string;
  tech: string[];
  year: string;
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
  { label: 'GitHub', href: 'https://github.com/PriyanshA0/', icon: 'github' },
  { label: 'Twitter/X', href: 'https://x.com/Priyanshu_A24', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyanshu-mishra-a02a8036b', icon: 'linkedin' },
  { label: 'Mail', href: 'mailto:priyanshumishra081@gmail.com', icon: 'mail' },
  { label: 'Contributions', href: 'https://github.com/PriyanshA0/?tab=contributions', icon: 'resume' },
  { label: 'Medium', href: 'https://medium.com/', icon: 'medium' }
];

export const aboutParagraphs = [
  "I'm Priyanshu Mishra, a full-stack developer passionate about building practical, user-focused applications. I enjoy creating solutions that solve real problems while maintaining clean code and thoughtful design.",
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
    year: '2024'
  },
  {
    title: 'Talksy',
    description: 'An interactive chat and communication platform with real-time messaging capabilities.',
    image: '/img/talksy/screenshots/main.png',
    liveHref: '/projects/talksy/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
    year: '2023'
  },
  {
    title: 'Food Share',
    description: 'A community platform for sharing and discovering food recipes and culinary experiences.',
    image: '/img/foodshare/showcase.png',
    liveHref: '/projects/food-share/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2023'
  },
  {
    title: 'Hunter HTML Editor',
    description: 'A lightweight HTML editor built with vanilla JavaScript for quick web development and prototyping.',
    image: '/img/html_code/editor.png',
    liveHref: '/projects/hunter-html-editor/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'JavaScript', 'DOM API'],
    year: '2023'
  },
  {
    title: 'Bubble Pixel Game',
    description: 'An interactive bubble-popping game with engaging gameplay mechanics and smooth animations.',
    image: '/img/bubble/game.png',
    liveHref: '/projects/bubble-pixel/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML5 Canvas', 'JavaScript', 'Game Dev'],
    year: '2023'
  },
  {
    title: 'Merge and Double',
    description: 'A puzzle game where you merge tiles to reach higher numbers, inspired by 2048.',
    image: '/img/Merge_and_double/game.png',
    liveHref: '/projects/merge-and-double/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2023'
  },
  {
    title: 'Find Monsters',
    description: 'An educational puzzle game for learning and identifying different monster characters.',
    image: '/img/monsters/main.png',
    liveHref: '/projects/find-monsters/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2023'
  },
  {
    title: 'Fun Learn',
    description: 'An interactive learning platform designed to make education engaging and enjoyable.',
    image: '/img/fun/learning.png',
    liveHref: '/projects/fun-learn/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2023'
  },
  {
    title: 'HTML CSS Tutorial',
    description: 'A comprehensive tutorial website for learning HTML and CSS fundamentals with practical examples.',
    image: '/img/html_code/tutorial.png',
    liveHref: '/projects/html-css-tutorial/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['HTML', 'CSS', 'Educational'],
    year: '2023'
  },
  {
    title: 'Python Guide',
    description: 'A detailed guide and tutorial for learning Python programming from basics to advanced concepts.',
    image: '/img/python/guide.png',
    liveHref: '/projects/python-guide/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['Python', 'Educational', 'Documentation'],
    year: '2023'
  },
  {
    title: 'C++ OOP',
    description: 'Educational resource covering Object-Oriented Programming concepts in C++ with practical examples.',
    image: '/img/cpp/oop.png',
    liveHref: '/projects/cpp-oop/',
    githubHref: 'https://github.com/PriyanshA0/',
    tech: ['C++', 'OOP', 'Educational'],
    year: '2023'
  }
];

// Featured projects shown on home page
export const projects: ProjectItem[] = allProjects.slice(0, 3);

export const experience: ExperienceItem[] = [
  {
    company: 'Exxat',
    role: 'Backend Developer Intern',
    duration: '01.2026 - 04.2026',
    type: 'Internship',
    tech: ['C#', 'ASP.NET Core', 'SQL Server', 'JavaScript', 'Playwright'],
    summary: 'Built and tested backend features with a focus on reliability, maintainability, and clean service boundaries.'
  },
  {
    company: 'Exxat',
    role: 'Developer Intern',
    duration: '04.2025 - 05.2025',
    type: 'Summer Internship',
    tech: ['Python', 'FastMCP', 'Docker', 'ngrok', 'OpenAI'],
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
    program: '12th Standard - Science',
    duration: '2021 - 2023',
    type: 'School',
    notes: 'Completed 12th with focus on science and mathematics. Grade: 8.1/10 (Sem 1)'
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
  cover: '/img/profile.png'
};

export const footerNote = '© 2025 Priyanshu Mishra. Built with passion and a lot of code.';
