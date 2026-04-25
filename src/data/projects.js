const projects = [
  {
    id: 1,
    featured: true,
    title: 'CinemaVault',
    subtitle: 'Movie & TV Show Tracker',
    tags: ['Full-Stack', 'React', 'Node / Express', 'MongoDB', 'Third-Party API', 'Vercel + Render'],
    tagColors: ['green', '', '', '', '', ''],
    description: `A full-stack movie and TV show tracking app with a personal library, watchlist,
      detailed stats dashboard, and people tracker. Integrates a third-party media database API
      for live data — poster art, genres, cast — with a Node.js/Express backend deployed on Render
      and a React frontend on Vercel. Demonstrates end-to-end full-stack architecture at production scale.`,
    images: ['/images/cinemavault-library.png', '/images/cinemavault-stats.png'],
    links: [
      { label: 'Live App', url: 'https://cinemavault-frontend.vercel.app', external: true },
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer', external: true },
    ],
  },
  {
    id: 2,
    featured: false,
    title: 'Weather App',
    tags: ['Web App', 'React', 'Vite', 'Public API', 'Async JS'],
    tagColors: ['blue', '', '', '', ''],
    description: `A weather application built with React and Vite that fetches real-time data
      from a public weather API. Features dynamic UI updates based on location input, demonstrating
      proficiency in async JavaScript, API integration, and component-based architecture.`,
    images: ['/images/weather-app.png'],
    links: [
      { label: 'Live Demo', url: 'https://jessetrimmer.github.io/Weather-app/', external: true },
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer/Weather-app', external: true },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Overhill Gardens',
    tags: ['Freelance', 'Web Design', 'CMS', 'Client Work'],
    tagColors: ['green', '', '', ''],
    description: `Freelance website redesign for a nursery & landscaping client. The live link
      is a demo site created as an example for the client proposal — not the final product.
      The full project covers CMS integration, an interactive event calendar, photo galleries,
      and online event registration.`,
    images: [],
    links: [
      { label: 'Demo Site', url: 'https://jessetrimmer.github.io/Overhill-Gardens-Website/', external: true },
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer/Overhill-Gardens-Website', external: true },
    ],
  },
  {
    id: 4,
    featured: false,
    title: 'Frog Jump',
    tags: ['Browser Game', 'JavaScript', 'HTML5', 'CSS', 'GitHub Pages'],
    tagColors: ['green', '', '', '', ''],
    description: `A browser-based side-scrolling game where a frog leaps through a meadow
      dodging incoming obstacles. Features character movement, collision detection, progressive
      difficulty, and a score/restart system. Built in vanilla JS and live on GitHub Pages.`,
    images: ['/images/frog-jump.png'],
    links: [
      { label: 'Play Now', url: 'https://jessetrimmer.github.io/Frog-Game/', external: true },
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer/Frog-Game', external: true },
    ],
  },
  {
    id: 5,
    featured: false,
    title: 'Clearwater Budget Manager',
    tags: ['Desktop App', 'Electron', 'React', 'Vite', 'Windows'],
    tagColors: ['blue', '', '', '', ''],
    description: `A personal budgeting desktop application packaged as a native Windows app
      via Electron. Features a week-view calendar, paycheck logging, recurring bills,
      loans & debt tracking, and an expenses log — a full financial management tool
      built with web technologies.`,
    images: ['/images/clearwater-budget.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer', external: true },
    ],
  },
  {
    id: 6,
    featured: false,
    title: 'My Tasks Desktop App',
    tags: ['Desktop App', 'Electron', 'React', 'Vite', 'Windows'],
    tagColors: ['pink', '', '', '', ''],
    description: `A React/Vite todo application converted into an installable Windows desktop app.
      Features drag-and-drop task reordering across category columns, priority sorting,
      completion tracking, and local data persistence — with a bold animated visual style.`,
    images: ['/images/my-tasks.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer', external: true },
    ],
  },
  {
    id: 7,
    featured: false,
    title: 'EduEnroll',
    tags: ['Full-Stack', 'React', 'Node / Express', 'MongoDB Atlas', 'JWT Auth'],
    tagColors: ['green', '', '', '', ''],
    description: `A full-stack course registration platform with user authentication, protected
      API routes, and a polished React frontend. Students can browse, register, and manage
      courses through a clean dashboard — built end-to-end with a RESTful Express API
      and MongoDB Atlas.`,
    images: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/JesseTrimmer', external: true },
    ],
  },
]

export default projects