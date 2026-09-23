/**
 * =============================================================================
 * PORTFOLIO CONFIGURATION & PERMANENT DATA
 * =============================================================================
 * This file contains your permanent portfolio details.
 * Any visitor loading your website (via GitHub Pages or custom domain)
 * will automatically see this data.
 * 
 * 💡 HOW TO UPDATE IN THE FUTURE:
 * 1. Open your portfolio in the browser.
 * 2. Click "Edit Profile & Projects" to customize your details.
 * 3. Go to the "Backup & Permanent Save" tab and click "Download portfolio-data.js"
 * 4. Replace this file in your project folder and push to GitHub!
 * 
 * OR: Edit this file directly in VS Code / text editor and push to GitHub.
 * =============================================================================
 */

window.PORTFOLIO_DATA = {
  // ---------------------------------------------------------------------------
  // 1. PERSONAL & PROFILE INFORMATION
  // ---------------------------------------------------------------------------
  profile: {
    name: "Asutosh Mohanty",
    roles: [
      "Software Engineer",
      "DSA Problem Solver",
      "Python & Java Developer",
      "Full-Stack Web Creator"
    ],
    bio: "Passionate software developer crafting robust applications in Python, Java, C, and JavaScript, with deep focus on Data Structures & Algorithms.",
    aboutHeadline: "Passionate Problem Solver & Software Builder",
    aboutDescription: "I am a dedicated software developer with strong foundational skills across multiple languages like Python, Java, C, and JavaScript, along with full-stack web technologies (HTML, CSS). My true passion lies in breaking down complex problems with clean algorithms, optimal time-space complexity, and building responsive, user-friendly digital experiences.",
    dsaCount: "450+",
    projectsCount: "12+",
    languagesCount: "6",
    location: "India / Remote",
    email: "asutoshmohanty776@gmail.com",
    github: "https://github.com/asutoshmohanty23",
    linkedin: "https://linkedin.com/in/asutosh-mohanty",
    leetcode: "https://leetcode.com/asutoshmohanty",
    resume: "#",
    avatarUrl: "https://images.unsplash.com/photo-1534972195531-a756b1129f63?w=400&auto=format&fit=crop&q=80"
  },

  // ---------------------------------------------------------------------------
  // 2. EDUCATION & QUALIFICATIONS
  // ---------------------------------------------------------------------------
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Institute of Engineering & Technology / University",
      duration: "2022 - 2026",
      grade: "CGPA: 8.8 / 10.0",
      description: "Specialized in Data Structures & Algorithms, Systems Programming, Database Systems, Computer Networks, and Object-Oriented Software Design."
    },
    {
      id: "edu-2",
      degree: "Senior Secondary Education (Class XII - Science PCM)",
      institution: "Higher Secondary Public School",
      duration: "2020 - 2022",
      grade: "Percentage: 92.4%",
      description: "Core subjects: Physics, Chemistry, Mathematics, and Computer Science with academic excellence."
    }
  ],

  // ---------------------------------------------------------------------------
  // 3. FEATURED PROJECTS
  // ---------------------------------------------------------------------------
  projects: [
    {
      id: "proj-1",
      title: "Algorithmic Pathfinding & Graph Visualizer",
      category: "DSA",
      tags: ["Python", "DSA", "Dijkstra", "A* Search", "Pygame"],
      description: "Interactive visualizer implementing Dijkstra's and A* search algorithms with obstacle generation, weighted nodes, and real-time path cost optimization.",
      github: "https://github.com/asutoshmohanty23",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-2",
      title: "High-Throughput Multi-Threaded Server",
      category: "Java",
      tags: ["Java", "Multithreading", "Sockets", "OOP", "Concurrency"],
      description: "Concurrent HTTP server in core Java utilizing custom thread pools, synchronized request queues, and non-blocking socket I/O handlers.",
      github: "https://github.com/asutoshmohanty23",
      demo: "",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-3",
      title: "Custom Memory Allocator & Unix Shell",
      category: "C",
      tags: ["C", "Pointers", "Memory Management", "UNIX", "Syscalls"],
      description: "POSIX-compliant command shell and dynamic memory allocator (malloc/free) implementing boundary tags, best-fit free lists, and memory coalescing.",
      github: "https://github.com/asutoshmohanty23",
      demo: "",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-4",
      title: "Interactive Code Hub & Developer Dashboard",
      category: "Web",
      tags: ["JavaScript", "HTML5", "CSS3", "REST APIs", "LocalStorage"],
      description: "Feature-packed developer workbench with syntax-highlighted snippet manager, markdown editor, task kanban, and instant local storage sync.",
      github: "https://github.com/asutoshmohanty23",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-5",
      title: "Automated Data Extraction & Analyzer",
      category: "Python",
      tags: ["Python", "BeautifulSoup", "Pandas", "Data Structures"],
      description: "High-performance automated web scraper and data processing pipeline extracting complex datasets and generating statistical trend reports.",
      github: "https://github.com/asutoshmohanty23",
      demo: "",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-6",
      title: "Binary Search Tree & Heap Animator",
      category: "DSA",
      tags: ["JavaScript", "Canvas", "Trees", "Heaps", "Algorithms"],
      description: "Interactive visual tool animating AVL tree self-balancing rotations, binary heap insertions, and graph traversals (BFS/DFS) step by step.",
      github: "https://github.com/asutoshmohanty23",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
    }
  ]
};
