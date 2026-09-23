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
    aboutDescription: "I am a Computer Science undergraduate specializing in AI & Machine Learning, with a strong foundation across Python, Java, C, and full-stack web development. I focus on breaking down complex engineering challenges into efficient, algorithmically sound solutions—bridging core computer science principles with practical, data-driven intelligence and intuitive user experiences.",
    dsaCount: "300+",
    projectsCount: "2+",
    languagesCount: "6",
    location: "India / Remote",
    email: "asutoshmohanty776@gmail.com",
    github: "https://github.com/asutoshmohanty23",
    linkedin: "https://www.linkedin.com/in/asutosh-mohanty-/",
    leetcode: "",
    resume: "#",
    avatarUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2300f2fe'/><stop offset='100%' stop-color='%234facfe'/></linearGradient></defs><circle cx='50' cy='50' r='50' fill='%23131b2e'/><circle cx='50' cy='50' r='46' fill='url(%23g)'/><text x='50%' y='58%' font-family='Arial,sans-serif' font-weight='bold' font-size='36' fill='%230d1117' text-anchor='middle'>AM</text></svg>"
  },

  // ---------------------------------------------------------------------------
  // 2. EDUCATION & QUALIFICATIONS
  // ---------------------------------------------------------------------------
  education: [
    {
      id: "edu-1",
      degree: "Secondary Education (Class X)",
      institution: "Odisha Adarsha Vidyalaya Dandapadar",
      duration: "2022 - 2023",
      grade: "Percentage: 74%",
      description: "Completed 10th standard with a focus on core subject— Science, Mathematics Standard, English, Odia and Social Science—earning Top Percentile Honors for academic excellence."
    },

    {
      id: "edu-2",
      degree: "Senior Secondary Education (Class XII-PCM)",
      institution: "Odisha Adarsha Vidyalaya Dandapadar",
      duration: "2023 - 2025",
      grade: "Percentage: 81.4%",
      description: "Core subjects: Physics, Chemistry, Mathematics, English and Physical Education with top percentile honors."
    },
    
    {
      id: "edu-3",
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Sambalpur University Institute of Information Technology",
      duration: "2025 - 2029",
      grade: "",
      description: "Pursuing a B.Tech in Computer Science and Engineering with a core specialization in AI & Machine Learning. Focused on bridging theoretical mathematics and statistical modeling with hands-on software development to build production-ready intelligent systems."
    }
  ],

  // ---------------------------------------------------------------------------
  // 3. FEATURED PROJECTS
  // ---------------------------------------------------------------------------
  projects: [
    {
      id: "proj-1",
      title: "ATRIV",
      category: "Web",
      tags: ["React","TypeScript","Vite","Tailwind","Node","Ollama"],
      description: "ARTIV is an AI-powered academic document and research integrity verification platform with synthetic text detection, DOI citation checks, author validation, and on-device LLM analysis.",
      github: "https://github.com/asutoshmohanty23/ATRIV",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "proj-1",
      title: "currency convertor",
      category: "Web",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description: "Currency Converter web app built with Vanilla JavaScript, HTML5 and CSS3. Features live exchange rate fetching, dynamic country flag updates, and instant currency swap.",
      github: "https://github.com/asutoshmohanty23/Currency-convertor",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
    }
  ]
};
