/**
 * DEVELOPER PORTFOLIO - CORE ENGINE & INTERACTIVITY
 * Tech Stack: JavaScript (ES6+), HTML5, CSS3, Python, Java, C, DSA
 * Features: Live In-Browser Profile & Education Customizer with Persistent LocalStorage
 *           + Smart Image URL Normalizer (Google Drive, GitHub, Cloudinary) & Direct File Upload
 */

// =============================================================================
// 1. DEFAULT DATA & STATE MANAGEMENT
// 1. DATA SOURCE & BASE CONFIGURATION (from portfolio-data.js)
// =============================================================================

const STORAGE_KEYS = {
  PROFILE: 'dev_portfolio_profile_data_v2',
  PROJECTS: 'dev_portfolio_projects_data_v2',
  EDUCATION: 'dev_portfolio_education_data_v2'
};

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1534972195531-a756b1129f63?w=400&auto=format&fit=crop&q=80";
const DEFAULT_PROJECT_IMG = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";

// Read from window.PORTFOLIO_DATA if loaded from portfolio-data.js
const RAW_CONFIG = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) ? window.PORTFOLIO_DATA : {};

const DEFAULT_PROFILE = {
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
  avatarUrl: DEFAULT_AVATAR,
  ...(RAW_CONFIG.profile || {})
};

const DEFAULT_EDUCATION = (RAW_CONFIG.education && Array.isArray(RAW_CONFIG.education) && RAW_CONFIG.education.length > 0)
  ? RAW_CONFIG.education
  : [
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
      degree: "Senior Secondary Education (Class XII - PCM)",
      institution: "Senior Secondary Public School",
      duration: "2020 - 2022",
      grade: "Percentage: 92.4%",
      description: "Core subjects: Physics, Chemistry, Mathematics, and Computer Science with top percentile honors."
    }
  ];

const DEFAULT_PROJECTS = (RAW_CONFIG.projects && Array.isArray(RAW_CONFIG.projects) && RAW_CONFIG.projects.length > 0)
  ? RAW_CONFIG.projects
  : [
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
  ];

let appState = {
  profile: { ...DEFAULT_PROFILE },
  education: [...DEFAULT_EDUCATION],
  projects: [...DEFAULT_PROJECTS],
  currentFilter: 'all'
};

// =============================================================================
// SMART IMAGE NORMALIZER (Google Drive, GitHub, Dropbox, Base64)
// =============================================================================
function normalizeImageUrl(url) {
  if (!url || typeof url !== 'string') return '';
  url = url.trim();

  // If already a Data URL (base64) or blob
  if (url.startsWith('data:image/') || url.startsWith('blob:')) {
    return url;
  }

  // Google Drive Link
  // Handles:
  // - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // - https://drive.google.com/open?id=FILE_ID
  // - https://drive.google.com/uc?id=FILE_ID
  const driveRegex = /(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=))([a-zA-Z0-9_-]+)/;
  const driveMatch = url.match(driveRegex);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1000`;
  }

  // GitHub blob/raw link
  // Handles: https://github.com/user/repo/blob/main/photo.jpg -> raw
  if (url.includes('github.com') && url.includes('/blob/')) {
    return url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
  }

  // Dropbox link (change dl=0 to raw=1)
  if (url.includes('dropbox.com')) {
    return url.replace('?dl=0', '?raw=1').replace('&dl=0', '&raw=1');
  }

  return url;
}

// Initialize State from LocalStorage
function initAppState() {
  try {
    const storedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (storedProfile) {
      appState.profile = { ...DEFAULT_PROFILE, ...JSON.parse(storedProfile) };
    }
    const storedEducation = localStorage.getItem(STORAGE_KEYS.EDUCATION);
    if (storedEducation) {
      appState.education = JSON.parse(storedEducation);
    }
    const storedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (storedProjects) {
      appState.projects = JSON.parse(storedProjects);
    }
  } catch (e) {
    console.warn("Could not load from localStorage, using defaults:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(appState.profile));
    localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(appState.education));
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(appState.projects));
  } catch (e) {
    console.error("Failed to save state to localStorage:", e);
  }
}

// =============================================================================
// 2. UI RENDER ENGINE
// =============================================================================

function renderProfileUI() {
  const p = appState.profile;

  // Title and Brand
  document.getElementById('page-title').textContent = `${p.name} | Portfolio & Software Engineer`;
  document.getElementById('nav-brand-name').textContent = p.name ? `${p.name.split(' ')[0]}Dev` : 'DevPortfolio';
  document.getElementById('footer-brand-name').textContent = document.getElementById('nav-brand-name').textContent;
  document.getElementById('footer-copy-name').textContent = p.name;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Hero Section
  document.getElementById('hero-name').textContent = p.name;
  document.getElementById('code-hero-name').textContent = `"${p.name}"`;
  document.getElementById('hero-bio').textContent = p.bio;
  document.getElementById('stat-dsa').textContent = p.dsaCount;
  document.getElementById('stat-projects').textContent = `${appState.projects.length}+`;
  document.getElementById('stat-languages').textContent = p.languagesCount || "6";

  // Avatar Images (Hero Thumbnail & About Section) with Smart Normalizer and Fallback
  const finalAvatar = normalizeImageUrl(p.avatarUrl) || DEFAULT_AVATAR;

  const heroAvatarImg = document.getElementById('hero-avatar-img');
  if (heroAvatarImg) {
    heroAvatarImg.onerror = () => { heroAvatarImg.src = DEFAULT_AVATAR; };
    heroAvatarImg.src = finalAvatar;
  }

  const aboutAvatarImg = document.getElementById('about-avatar-img');
  if (aboutAvatarImg) {
    aboutAvatarImg.onerror = () => { aboutAvatarImg.src = DEFAULT_AVATAR; };
    aboutAvatarImg.src = finalAvatar;
  }

  // About Section Details
  document.getElementById('about-headline').textContent = p.aboutHeadline;
  document.getElementById('about-description').textContent = p.aboutDescription;
  document.getElementById('meta-location').textContent = p.location;
  document.getElementById('meta-email').textContent = p.email;

  // Contact Section
  document.getElementById('contact-email-text').textContent = p.email;
  if (p.github) {
    const cleanGh = p.github.replace(/^https?:\/\//, '');
    document.getElementById('contact-github-text').textContent = cleanGh;
    document.getElementById('contact-github-link').href = p.github;
  }
  if (p.linkedin) {
    const cleanLi = p.linkedin.replace(/^https?:\/\//, '');
    document.getElementById('contact-linkedin-text').textContent = cleanLi;
    document.getElementById('contact-linkedin-link').href = p.linkedin;
  }

  // Render Sub-components
  renderSocialLinks();
  renderEducationUI();
  renderProjectsGrid();
}

function renderSocialLinks() {
  const p = appState.profile;
  const heroContainer = document.getElementById('hero-socials-container');
  const footerContainer = document.getElementById('footer-socials-container');

  const links = [
    { name: 'GitHub', url: p.github, icon: 'fa-brands fa-github' },
    { name: 'LinkedIn', url: p.linkedin, icon: 'fa-brands fa-linkedin' },
    { name: 'LeetCode', url: p.leetcode, icon: 'fa-solid fa-code' },
    { name: 'Email', url: `mailto:${p.email}`, icon: 'fa-solid fa-envelope' },
    { name: 'Resume', url: p.resume, icon: 'fa-solid fa-file-lines' }
  ].filter(link => link.url && link.url !== '#');

  const html = links.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="${l.name}">
      <i class="${l.icon}"></i>
    </a>
  `).join('');

  if (heroContainer) heroContainer.innerHTML = html;
  if (footerContainer) footerContainer.innerHTML = html;
}

// =============================================================================
// REORDERING & PREFERENCE CONTROLLERS (INSIDE EDIT PROFILE & PROJECTS MODAL)
// =============================================================================

function moveEducationItem(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= appState.education.length || toIndex >= appState.education.length) return;
  const item = appState.education.splice(fromIndex, 1)[0];
  appState.education.splice(toIndex, 0, item);
  saveState();
  renderEducationUI();
  renderModalEducationManager();
  showToast(`Moved "${item.degree}" to Position #${toIndex + 1}`, 'success');
}

function moveProjectItem(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= appState.projects.length || toIndex >= appState.projects.length) return;
  const item = appState.projects.splice(fromIndex, 1)[0];
  appState.projects.splice(toIndex, 0, item);
  saveState();
  renderProjectsGrid();
  renderModalProjectsManager();
  document.getElementById('stat-projects').textContent = `${appState.projects.length}+`;
  showToast(`Moved "${item.title}" to Position #${toIndex + 1}`, 'success');
}

// -----------------------------------------------------------------------------
// Education Renderers (Clean & Public View)
// -----------------------------------------------------------------------------
function renderEducationUI() {
  const container = document.getElementById('education-list');
  if (!container) return;

  if (appState.education.length === 0) {
    container.innerHTML = `
      <div class="projects-empty-state">
        <i class="fa-solid fa-graduation-cap"></i>
        <h3>No Education Records Found</h3>
        <p>Click "Add Education" to add your degree or school details!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.education.map(edu => `
    <div class="education-card" data-id="${edu.id}">
      <div class="edu-card-top">
        <div class="edu-icon-wrap">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div class="edu-actions-top">
          <button class="btn-card-icon edit" onclick="openEditEducationModal('${edu.id}')" title="Edit Education Details">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn-card-icon delete" onclick="deleteEducation('${edu.id}')" title="Delete Education Record">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <h3 class="edu-degree">${escapeHTML(edu.degree)}</h3>
      <div class="edu-institution">
        <i class="fa-solid fa-building-columns"></i> ${escapeHTML(edu.institution)}
      </div>

      <div class="edu-meta-pills">
        <span class="edu-pill duration"><i class="fa-regular fa-calendar-days"></i> ${escapeHTML(edu.duration)}</span>
        ${edu.grade ? `<span class="edu-pill grade"><i class="fa-solid fa-award"></i> ${escapeHTML(edu.grade)}</span>` : ''}
      </div>

      ${edu.description ? `<p class="edu-desc">${escapeHTML(edu.description)}</p>` : ''}
    </div>
  `).join('');
}

function renderModalEducationManager() {
  const container = document.getElementById('education-manager-list');
  if (!container) return;

  if (appState.education.length === 0) {
    container.innerHTML = `<p class="text-secondary">No education records added yet.</p>`;
    return;
  }

  const total = appState.education.length;

  container.innerHTML = appState.education.map((edu, index) => `
    <div class="manager-edu-item">
      <div class="manager-order-col">
        <span class="manager-pos-badge" title="Display Preference Rank">#${index + 1} ${index === 0 ? '★ Top' : ''}</span>
        <div class="manager-steppers-col">
          <button class="btn-mini-step" ${index === 0 ? 'disabled' : ''} onclick="moveEducationItem(${index}, ${index - 1})" title="Move Up in priority">
            <i class="fa-solid fa-chevron-up"></i>
          </button>
          <button class="btn-mini-step" ${index === total - 1 ? 'disabled' : ''} onclick="moveEducationItem(${index}, ${index + 1})" title="Move Down in priority">
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div class="manager-edu-info">
        <h5>${escapeHTML(edu.degree)}</h5>
        <p><span class="text-cyan">${escapeHTML(edu.institution)}</span> &bull; ${escapeHTML(edu.duration)} ${edu.grade ? `(${escapeHTML(edu.grade)})` : ''}</p>
        
        <!-- In-Modal Preference Slider -->
        <div class="manager-slider-row">
          <span class="mini-bound"><i class="fa-solid fa-sliders"></i> Priority:</span>
          <input type="range" 
                 class="order-range-slider mini" 
                 min="1" 
                 max="${total}" 
                 value="${index + 1}" 
                 title="Slide to change display preference (1 = Top/First)"
                 onchange="moveEducationItem(${index}, parseInt(this.value) - 1)" 
                 oninput="this.nextElementSibling.textContent='Position #' + this.value" />
          <span class="mini-pos-label">Position #${index + 1}</span>
        </div>
      </div>

      <div class="manager-edu-actions">
        <button class="btn btn-sm btn-outline" onclick="openEditEducationModal('${edu.id}')" title="Edit details">
          <i class="fa-solid fa-pen"></i> Edit
        </button>
        <button class="btn btn-sm btn-danger-outline" onclick="deleteEducation('${edu.id}')" title="Delete record">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// Projects Renderers (Clean & Public View)
// -----------------------------------------------------------------------------
function renderProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filter = appState.currentFilter;
  const filtered = filter === 'all' 
    ? appState.projects 
    : appState.projects.filter(proj => proj.category.toLowerCase() === filter.toLowerCase());

  document.getElementById('count-all').textContent = appState.projects.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="projects-empty-state">
        <i class="fa-solid fa-folder-open"></i>
        <h3>No projects found in this category</h3>
        <p>Click "Add New Project" to upload or create one!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(proj => {
    const rawImg = proj.image || DEFAULT_PROJECT_IMG;
    const imgUrl = normalizeImageUrl(rawImg);
    const tagBadges = (proj.tags || []).map(t => `<span class="tag-badge">${escapeHTML(t)}</span>`).join('');
    
    return `
      <article class="project-card" data-id="${proj.id}">
        <div class="project-banner-wrap">
          <img src="${imgUrl}" alt="${escapeHTML(proj.title)}" class="project-banner" loading="lazy" onerror="this.src='${DEFAULT_PROJECT_IMG}'" />
          <span class="project-category-badge">${escapeHTML(proj.category)}</span>
          <div class="project-actions-quick">
            <button class="btn-card-icon edit" onclick="openEditProjectModal('${proj.id}')" title="Edit Project">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-card-icon delete" onclick="deleteProject('${proj.id}')" title="Delete Project">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="project-content">
          <h3 class="project-title">${escapeHTML(proj.title)}</h3>
          <p class="project-desc">${escapeHTML(proj.description)}</p>
          
          <div class="project-tags">
            ${tagBadges}
          </div>

          <div class="project-links">
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
                <i class="fa-brands fa-github"></i> GitHub Repo
              </a>
            ` : ''}
            ${proj.demo ? `
              <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderModalProjectsManager() {
  const container = document.getElementById('projects-manager-list');
  if (!container) return;

  if (appState.projects.length === 0) {
    container.innerHTML = `<p class="text-secondary">No projects added yet.</p>`;
    return;
  }

  const total = appState.projects.length;

  container.innerHTML = appState.projects.map((proj, index) => `
    <div class="manager-project-item">
      <div class="manager-order-col">
        <span class="manager-pos-badge" title="Display Preference Rank">#${index + 1} ${index === 0 ? '★ Top' : ''}</span>
        <div class="manager-steppers-col">
          <button class="btn-mini-step" ${index === 0 ? 'disabled' : ''} onclick="moveProjectItem(${index}, ${index - 1})" title="Move Up in priority">
            <i class="fa-solid fa-chevron-up"></i>
          </button>
          <button class="btn-mini-step" ${index === total - 1 ? 'disabled' : ''} onclick="moveProjectItem(${index}, ${index + 1})" title="Move Down in priority">
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div class="manager-item-info">
        <h5>${escapeHTML(proj.title)}</h5>
        <p><span class="text-cyan">[${escapeHTML(proj.category || 'Project')}]</span> ${escapeHTML((proj.tags || []).join(', '))}</p>
        
        <!-- In-Modal Preference Slider -->
        <div class="manager-slider-row">
          <span class="mini-bound"><i class="fa-solid fa-sliders"></i> Priority:</span>
          <input type="range" 
                 class="order-range-slider mini" 
                 min="1" 
                 max="${total}" 
                 value="${index + 1}" 
                 title="Slide to change display preference (1 = Top/First)"
                 onchange="moveProjectItem(${index}, parseInt(this.value) - 1)" 
                 oninput="this.nextElementSibling.textContent='Position #' + this.value" />
          <span class="mini-pos-label">Position #${index + 1}</span>
        </div>
      </div>

      <div class="manager-item-actions">
        <button class="btn btn-sm btn-outline" onclick="openEditProjectModal('${proj.id}')" title="Edit details">
          <i class="fa-solid fa-pen"></i> Edit
        </button>
        <button class="btn btn-sm btn-danger-outline" onclick="deleteProject('${proj.id}')" title="Delete project">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// =============================================================================
// 3. TOAST NOTIFICATION ENGINE
// =============================================================================

function showToast(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation';

  toast.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// =============================================================================
// 4. DYNAMIC TYPEWRITER EFFECT
// =============================================================================

class Typewriter {
  constructor(el, roles, speed = 80, delay = 1800) {
    this.el = el;
    this.roles = roles;
    this.speed = speed;
    this.delay = delay;
    this.roleIdx = 0;
    this.charIdx = 0;
    this.isDeleting = false;
    this.timer = null;
    this.type();
  }

  updateRoles(newRoles) {
    this.roles = newRoles;
    this.roleIdx = 0;
    this.charIdx = 0;
    this.isDeleting = false;
  }

  type() {
    if (!this.roles.length || !this.el) return;
    const current = this.roles[this.roleIdx % this.roles.length];

    if (this.isDeleting) {
      this.charIdx--;
      this.el.textContent = current.substring(0, this.charIdx);
    } else {
      this.charIdx++;
      this.el.textContent = current.substring(0, this.charIdx);
    }

    let typeSpeed = this.speed;

    if (!this.isDeleting && this.charIdx === current.length) {
      typeSpeed = this.delay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.roleIdx++;
      typeSpeed = 400;
    }

    this.timer = setTimeout(() => this.type(), typeSpeed);
  }
}

let typewriterInstance = null;

function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;
  typewriterInstance = new Typewriter(el, appState.profile.roles);
}

// =============================================================================
// 5. INTERACTIVE PARTICLE CANVAS BACKGROUND
// =============================================================================

function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00f2fe' : '#7928ca';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.5;
          this.y -= (dy / dist) * force * 2.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.18 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// =============================================================================
// 6. INTERACTIVE DSA ALGORITHM VISUALIZER
// =============================================================================

const dsaVisualizer = {
  array: [],
  size: 14,
  isRunning: false,
  shouldStop: false,
  speed: 300,
  comparisons: 0,
  swaps: 0,

  init() {
    this.bindEvents();
    this.generateNewArray();
  },

  bindEvents() {
    const generateBtn = document.getElementById('algo-generate-btn');
    const runBtn = document.getElementById('algo-run-btn');
    const resetBtn = document.getElementById('algo-reset-btn');
    const speedSlider = document.getElementById('algo-speed');
    const algoSelect = document.getElementById('algo-select');

    if (generateBtn) generateBtn.addEventListener('click', () => this.generateNewArray());
    if (runBtn) runBtn.addEventListener('click', () => this.runSelectedAlgorithm());
    if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        this.speed = 850 - parseInt(e.target.value);
      });
    }
    if (algoSelect) {
      algoSelect.addEventListener('change', () => {
        this.reset();
        this.generateNewArray();
      });
    }
  },

  generateNewArray() {
    if (this.isRunning) return;
    const algo = document.getElementById('algo-select')?.value || 'bubble';

    this.array = [];
    this.comparisons = 0;
    this.swaps = 0;
    this.updateStats();

    for (let i = 0; i < this.size; i++) {
      this.array.push(Math.floor(Math.random() * 85) + 15);
    }

    if (algo === 'binary_search') {
      this.array.sort((a, b) => a - b);
    }

    this.renderBars();
    this.setStatus('Ready', 'Array generated. Click Run Visualizer to start.');
  },

  renderBars(highlightIndices = {}, customValues = null) {
    const container = document.getElementById('dsa-bars-container');
    if (!container) return;

    const values = customValues || this.array;
    container.innerHTML = values.map((val, idx) => {
      let stateClass = '';
      if (highlightIndices.comparing && highlightIndices.comparing.includes(idx)) stateClass = 'comparing';
      if (highlightIndices.swapping && highlightIndices.swapping.includes(idx)) stateClass = 'swapping';
      if (highlightIndices.sorted && highlightIndices.sorted.includes(idx)) stateClass = 'sorted';

      return `
        <div class="algo-bar-wrapper">
          <div class="algo-bar ${stateClass}" style="height: ${val * 2.2}px;"></div>
          <span class="algo-bar-val">${val}</span>
        </div>
      `;
    }).join('');
  },

  updateStats() {
    const compEl = document.getElementById('algo-comparisons');
    const swapEl = document.getElementById('algo-swaps');
    if (compEl) compEl.textContent = `Comparisons: ${this.comparisons}`;
    if (swapEl) swapEl.textContent = `Swaps: ${this.swaps}`;
  },

  setStatus(badge, msg) {
    const bEl = document.getElementById('algo-status-badge');
    const mEl = document.getElementById('algo-status-msg');
    if (bEl) bEl.textContent = badge;
    if (mEl) mEl.textContent = msg;
  },

  async sleep() {
    return new Promise(resolve => setTimeout(resolve, this.speed));
  },

  async runSelectedAlgorithm() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.shouldStop = false;
    this.comparisons = 0;
    this.swaps = 0;
    this.updateStats();

    const algo = document.getElementById('algo-select')?.value || 'bubble';

    if (algo === 'bubble') {
      await this.bubbleSort();
    } else if (algo === 'selection') {
      await this.selectionSort();
    } else if (algo === 'insertion') {
      await this.insertionSort();
    } else if (algo === 'binary_search') {
      await this.binarySearch();
    }

    this.isRunning = false;
  },

  reset() {
    this.shouldStop = true;
    this.isRunning = false;
    this.generateNewArray();
  },

  async bubbleSort() {
    this.setStatus('Running', 'Executing Bubble Sort — Adjacent comparisons & swaps.');
    const n = this.array.length;
    const sortedIndices = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.shouldStop) return;

        this.comparisons++;
        this.updateStats();
        this.renderBars({ comparing: [j, j + 1], sorted: sortedIndices });
        await this.sleep();

        if (this.array[j] > this.array[j + 1]) {
          this.swaps++;
          this.updateStats();
          const temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;

          this.renderBars({ swapping: [j, j + 1], sorted: sortedIndices });
          await this.sleep();
        }
      }
      sortedIndices.push(n - i - 1);
    }

    this.renderBars({ sorted: this.array.map((_, i) => i) });
    this.setStatus('Complete', 'Bubble Sort complete in O(N²) time.');
    showToast('Bubble Sort Finished!', 'success');
  },

  async selectionSort() {
    this.setStatus('Running', 'Executing Selection Sort — Finding minimum element.');
    const n = this.array.length;
    const sortedIndices = [];

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (this.shouldStop) return;

        this.comparisons++;
        this.updateStats();
        this.renderBars({ comparing: [j, minIdx], sorted: sortedIndices });
        await this.sleep();

        if (this.array[j] < this.array[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        this.swaps++;
        this.updateStats();
        const temp = this.array[i];
        this.array[i] = this.array[minIdx];
        this.array[minIdx] = temp;

        this.renderBars({ swapping: [i, minIdx], sorted: sortedIndices });
        await this.sleep();
      }
      sortedIndices.push(i);
    }

    this.renderBars({ sorted: this.array.map((_, i) => i) });
    this.setStatus('Complete', 'Selection Sort complete.');
    showToast('Selection Sort Finished!', 'success');
  },

  async insertionSort() {
    this.setStatus('Running', 'Executing Insertion Sort — Shifting elements to sorted sub-array.');
    const n = this.array.length;

    for (let i = 1; i < n; i++) {
      let key = this.array[i];
      let j = i - 1;

      while (j >= 0 && this.array[j] > key) {
        if (this.shouldStop) return;
        this.comparisons++;
        this.swaps++;
        this.updateStats();

        this.array[j + 1] = this.array[j];
        this.renderBars({ swapping: [j, j + 1] });
        await this.sleep();
        j--;
      }
      this.array[j + 1] = key;
      this.renderBars({ comparing: [j + 1] });
      await this.sleep();
    }

    this.renderBars({ sorted: this.array.map((_, i) => i) });
    this.setStatus('Complete', 'Insertion Sort complete.');
    showToast('Insertion Sort Finished!', 'success');
  },

  async binarySearch() {
    this.setStatus('Running', 'Binary Search on sorted array.');
    const target = this.array[Math.floor(Math.random() * this.array.length)];
    this.setStatus('Target: ' + target, `Searching for key ${target} with O(log N) divide-and-conquer.`);

    let left = 0;
    let right = this.array.length - 1;
    let found = false;

    while (left <= right) {
      if (this.shouldStop) return;
      const mid = Math.floor((left + right) / 2);
      this.comparisons++;
      this.updateStats();

      this.renderBars({ comparing: [mid], swapping: [left, right] });
      await this.sleep();

      if (this.array[mid] === target) {
        this.renderBars({ sorted: [mid] });
        this.setStatus('Found', `Target element ${target} located at index ${mid}!`);
        showToast(`Element ${target} found at index ${mid}!`, 'success');
        found = true;
        break;
      } else if (this.array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (!found) {
      this.setStatus('Not Found', `Target element ${target} is not present in array.`);
    }
  }
};

// =============================================================================
// 7. INTERACTIVE TERMINAL EMULATOR
// =============================================================================

function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const clearBtn = document.getElementById('terminal-clear-btn');
  const quickChips = document.querySelectorAll('.terminal-chip');

  if (!terminalInput || !terminalOutput) return;

  const history = [];
  let historyIdx = -1;

  function printLine(text, className = 'cmd-output') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.innerHTML = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function executeCommand(cmd) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    printLine(`guest@portfolio:~$ ${escapeHTML(trimmed)}`, 'cmd-echo');
    history.push(trimmed);
    historyIdx = history.length;

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();

    switch (command) {
      case 'help':
        printLine(`Available commands:
  <span class="cmd-highlight">skills</span>       - List technical skills & language proficiencies
  <span class="cmd-highlight">education</span>    - View academic degrees & qualifications
  <span class="cmd-highlight">dsa</span>          - Show Data Structures & Problem Solving stats
  <span class="cmd-highlight">projects</span>     - List all open-source & portfolio projects
  <span class="cmd-highlight">whoami</span>       - Display developer bio & roles
  <span class="cmd-highlight">contact</span>      - Show email, GitHub, and social contacts
  <span class="cmd-highlight">customize</span>    - Open the in-browser Profile & Education Editor
  <span class="cmd-highlight">date</span>         - Display current timestamp
  <span class="cmd-highlight">clear</span>        - Clear terminal screen`);
        break;

      case 'whoami':
        printLine(`<b>${escapeHTML(appState.profile.name)}</b>
Roles: ${appState.profile.roles.join(' | ')}
Location: ${escapeHTML(appState.profile.location)}
Bio: ${escapeHTML(appState.profile.bio)}`);
        break;

      case 'education':
        const eduList = appState.education.map((e, i) => 
          `[${i + 1}] <b>${escapeHTML(e.degree)}</b><br>&nbsp;&nbsp;&nbsp;&nbsp;🏫 ${escapeHTML(e.institution)} | 📅 ${escapeHTML(e.duration)} ${e.grade ? `| 🏆 ${escapeHTML(e.grade)}` : ''}`
        ).join('<br>');
        printLine(`<b>Academic Degrees & Qualifications:</b><br>${eduList}`);
        break;

      case 'skills':
        printLine(`<b>Technical Stack & Proficiencies:</b>
- Languages: JavaScript (ES6+), Python, Java, C, HTML5, CSS3
- Core & CS: Data Structures & Algorithms, OOPs, DBMS, Operating Systems
- Tools: Git, GitHub, VS Code, Linux/Bash, REST APIs`);
        break;

      case 'dsa':
        printLine(`<b>Data Structures & Algorithms Stats:</b>
- Problems Solved: ${appState.profile.dsaCount}
- Key Topics: Arrays, Linked Lists, Binary Trees, Graphs (BFS/DFS), Dynamic Programming, Heaps, Backtracking
- Algorithmic Optimization: Time & Space Complexity focus`);
        break;

      case 'projects':
        const projList = appState.projects.map((p, i) => 
          `[${i + 1}] <span class="cmd-highlight">${escapeHTML(p.title)}</span> (${p.category}) — ${escapeHTML(p.tags.join(', '))}`
        ).join('<br>');
        printLine(`<b>Featured Projects (${appState.projects.length} Total):</b><br>${projList}`);
        break;

      case 'contact':
        printLine(`<b>Get in Touch:</b>
- Email: ${escapeHTML(appState.profile.email)}
- GitHub: <a href="${appState.profile.github}" target="_blank" class="text-cyan">${escapeHTML(appState.profile.github)}</a>
- LinkedIn: <a href="${appState.profile.linkedin}" target="_blank" class="text-cyan">${escapeHTML(appState.profile.linkedin)}</a>
- LeetCode: <a href="${appState.profile.leetcode}" target="_blank" class="text-cyan">${escapeHTML(appState.profile.leetcode)}</a>`);
        break;

      case 'customize':
      case 'edit':
        openCustomizerModal();
        printLine(`Opening Profile Customizer...`, 'system-msg');
        break;

      case 'clear':
        terminalOutput.innerHTML = '';
        break;

      case 'date':
        printLine(new Date().toString());
        break;

      default:
        printLine(`Command not found: '${escapeHTML(command)}'. Type <span class="cmd-highlight">'help'</span> for a list of commands.`, 'error-msg');
    }
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIdx > 0) {
        historyIdx--;
        terminalInput.value = history[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        historyIdx++;
        terminalInput.value = history[historyIdx];
      } else {
        historyIdx = history.length;
        terminalInput.value = '';
      }
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      terminalOutput.innerHTML = '';
      printLine(`Terminal cleared. Type <span class="cmd-highlight">'help'</span> for commands.`, 'system-msg');
    });
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
        terminalInput.focus();
      }
    });
  });
}

// =============================================================================
// 8. MODAL MANAGERS (PROFILE, EDUCATION & PROJECTS)
// =============================================================================

function openCustomizerModal(defaultTab = 'tab-personal') {
  const modal = document.getElementById('customizer-modal');
  if (!modal) return;

  // Populate Personal Details Form
  document.getElementById('edit-name').value = appState.profile.name || '';
  document.getElementById('edit-role-titles').value = appState.profile.roles.join(', ');
  document.getElementById('edit-bio').value = appState.profile.bio || '';
  document.getElementById('edit-about').value = appState.profile.aboutDescription || '';
  document.getElementById('edit-dsa-count').value = appState.profile.dsaCount || '';
  document.getElementById('edit-projects-count').value = appState.profile.projectsCount || '';
  document.getElementById('edit-location').value = appState.profile.location || '';
  
  // Set Avatar URL & Preview
  const currentAvatar = appState.profile.avatarUrl || DEFAULT_AVATAR;
  document.getElementById('edit-avatar-url').value = currentAvatar.startsWith('data:') ? '' : currentAvatar;
  const avatarPreview = document.getElementById('edit-avatar-preview');
  if (avatarPreview) {
    avatarPreview.onerror = () => { avatarPreview.src = DEFAULT_AVATAR; };
    avatarPreview.src = normalizeImageUrl(currentAvatar) || DEFAULT_AVATAR;
  }

  // Populate Social Links Form
  document.getElementById('edit-email').value = appState.profile.email || '';
  document.getElementById('edit-github').value = appState.profile.github || '';
  document.getElementById('edit-linkedin').value = appState.profile.linkedin || '';
  document.getElementById('edit-leetcode').value = appState.profile.leetcode || '';
  document.getElementById('edit-resume').value = appState.profile.resume || '';

  // Render Education list in manager
  renderModalEducationManager();

  // Render Projects list in manager
  renderModalProjectsManager();

  // Switch Tab
  switchModalTab(defaultTab);

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCustomizerModal() {
  const modal = document.getElementById('customizer-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function switchModalTab(targetTabId) {
  const tabs = document.querySelectorAll('.modal-tabs .tab-btn');
  const panes = document.querySelectorAll('.modal-body .tab-pane');

  tabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === targetTabId);
  });

  panes.forEach(p => {
    p.classList.toggle('active', p.id === targetTabId);
  });
}

// -----------------------------------------------------------------------------
// Education Modal Handlers
// -----------------------------------------------------------------------------
function openEditEducationModal(eduId = null) {
  const modal = document.getElementById('education-edit-modal');
  if (!modal) return;

  const idInput = document.getElementById('edu-item-id');
  const degreeInput = document.getElementById('edu-degree');
  const instInput = document.getElementById('edu-institution');
  const durationInput = document.getElementById('edu-duration');
  const gradeInput = document.getElementById('edu-grade');
  const descInput = document.getElementById('edu-desc');

  const eduSlider = document.getElementById('edu-order-pos-slider');
  const eduValBadge = document.getElementById('edu-order-pos-val');
  const eduMaxLabel = document.getElementById('edu-order-slider-max');

  const totalCount = appState.education.length + (eduId ? 0 : 1);
  let currentPos = 1;

  if (eduId) {
    const idx = appState.education.findIndex(e => e.id === eduId);
    if (idx !== -1) {
      const edu = appState.education[idx];
      currentPos = idx + 1;
      document.getElementById('education-modal-title').textContent = 'Edit Education Details';
      idInput.value = edu.id;
      degreeInput.value = edu.degree;
      instInput.value = edu.institution;
      durationInput.value = edu.duration;
      gradeInput.value = edu.grade || '';
      descInput.value = edu.description || '';
    }
  } else {
    document.getElementById('education-modal-title').textContent = 'Add New Education';
    idInput.value = '';
    degreeInput.value = '';
    instInput.value = '';
    durationInput.value = '';
    gradeInput.value = '';
    descInput.value = '';
    currentPos = 1; // Default to top priority
  }

  if (eduSlider) {
    eduSlider.min = '1';
    eduSlider.max = String(Math.max(1, totalCount));
    eduSlider.value = String(currentPos);
    if (eduValBadge) eduValBadge.textContent = `Position #${currentPos} of ${totalCount}`;
    if (eduMaxLabel) eduMaxLabel.textContent = `${totalCount} (Bottom)`;
    eduSlider.oninput = () => {
      if (eduValBadge) eduValBadge.textContent = `Position #${eduSlider.value} of ${totalCount}`;
    };
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeEducationEditModal() {
  const modal = document.getElementById('education-edit-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function deleteEducation(eduId) {
  if (confirm("Are you sure you want to remove this education record?")) {
    appState.education = appState.education.filter(e => e.id !== eduId);
    saveState();
    renderEducationUI();
    renderModalEducationManager();
    showToast('Education record deleted!', 'success');
  }
}

// -----------------------------------------------------------------------------
// Project Modal Handlers
// -----------------------------------------------------------------------------
function openEditProjectModal(projectId = null) {
  const modal = document.getElementById('project-edit-modal');
  if (!modal) return;

  const idInput = document.getElementById('project-item-id');
  const titleInput = document.getElementById('proj-title');
  const catInput = document.getElementById('proj-category');
  const tagsInput = document.getElementById('proj-tags');
  const descInput = document.getElementById('proj-desc');
  const ghInput = document.getElementById('proj-github');
  const demoInput = document.getElementById('proj-demo');
  const imgInput = document.getElementById('proj-image');
  const imgPreview = document.getElementById('proj-image-preview');

  const projSlider = document.getElementById('proj-order-pos-slider');
  const projValBadge = document.getElementById('proj-order-pos-val');
  const projMaxLabel = document.getElementById('proj-order-slider-max');

  const totalCount = appState.projects.length + (projectId ? 0 : 1);
  let currentPos = 1;

  if (projectId) {
    const idx = appState.projects.findIndex(p => p.id === projectId);
    if (idx !== -1) {
      const proj = appState.projects[idx];
      currentPos = idx + 1;
      document.getElementById('project-modal-title').textContent = 'Edit Project';
      idInput.value = proj.id;
      titleInput.value = proj.title;
      catInput.value = proj.category;
      tagsInput.value = proj.tags.join(', ');
      descInput.value = proj.description;
      ghInput.value = proj.github || '';
      demoInput.value = proj.demo || '';
      imgInput.value = (proj.image && !proj.image.startsWith('data:')) ? proj.image : '';
      if (imgPreview) {
        imgPreview.onerror = () => { imgPreview.src = DEFAULT_PROJECT_IMG; };
        imgPreview.src = normalizeImageUrl(proj.image) || DEFAULT_PROJECT_IMG;
      }
    }
  } else {
    document.getElementById('project-modal-title').textContent = 'Add New Project';
    idInput.value = '';
    titleInput.value = '';
    catInput.value = 'DSA';
    tagsInput.value = '';
    descInput.value = '';
    ghInput.value = '';
    demoInput.value = '';
    imgInput.value = '';
    currentPos = 1; // Default to top priority
    if (imgPreview) {
      imgPreview.src = DEFAULT_PROJECT_IMG;
    }
  }

  if (projSlider) {
    projSlider.min = '1';
    projSlider.max = String(Math.max(1, totalCount));
    projSlider.value = String(currentPos);
    if (projValBadge) projValBadge.textContent = `Position #${currentPos} of ${totalCount}`;
    if (projMaxLabel) projMaxLabel.textContent = `${totalCount} (Bottom)`;
    projSlider.oninput = () => {
      if (projValBadge) projValBadge.textContent = `Position #${projSlider.value} of ${totalCount}`;
    };
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectEditModal() {
  const modal = document.getElementById('project-edit-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function deleteProject(projectId) {
  if (confirm("Are you sure you want to delete this project?")) {
    appState.projects = appState.projects.filter(p => p.id !== projectId);
    saveState();
    renderProjectsGrid();
    renderModalProjectsManager();
    document.getElementById('stat-projects').textContent = `${appState.projects.length}+`;
    showToast('Project deleted successfully!', 'success');
  }
}

// Global hooks for inline onclick handlers
window.openEditEducationModal = openEditEducationModal;
window.deleteEducation = deleteEducation;
window.openEditProjectModal = openEditProjectModal;
window.deleteProject = deleteProject;
window.moveEducationItem = moveEducationItem;
window.moveProjectItem = moveProjectItem;

// =============================================================================
// 9. EVENT LISTENERS & FORM HANDLERS
// =============================================================================

function bindAppEvents() {
  // Navbar Sticky and Mobile Toggle
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('main section');
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        const id = sec.getAttribute('id');
        document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu .nav-link').forEach(l => {
      l.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // Customizer & Modal Triggers
  const openCustomizerBtn = document.getElementById('open-customizer-btn');
  const heroCustomizeBtn = document.getElementById('hero-customize-trigger');
  const closeCustomizerBtn = document.getElementById('close-customizer-btn');
  
  const addEduQuickBtn = document.getElementById('add-education-quick-btn');
  const openAddEduModalBtn = document.getElementById('open-add-education-modal-btn');
  const closeEduEditBtn = document.getElementById('close-education-edit-btn');
  const cancelEduEditBtn = document.getElementById('cancel-education-edit-btn');

  const addProjectQuickBtn = document.getElementById('add-project-quick-btn');
  const openAddProjectModalBtn = document.getElementById('open-add-project-modal-btn');
  const closeProjectEditBtn = document.getElementById('close-project-edit-btn');
  const cancelProjectEditBtn = document.getElementById('cancel-project-edit-btn');

  if (openCustomizerBtn) openCustomizerBtn.addEventListener('click', () => openCustomizerModal());
  if (heroCustomizeBtn) heroCustomizeBtn.addEventListener('click', () => openCustomizerModal());
  if (closeCustomizerBtn) closeCustomizerBtn.addEventListener('click', closeCustomizerModal);
  
  if (addEduQuickBtn) addEduQuickBtn.addEventListener('click', () => openEditEducationModal());
  if (openAddEduModalBtn) openAddEduModalBtn.addEventListener('click', () => openEditEducationModal());
  if (closeEduEditBtn) closeEduEditBtn.addEventListener('click', closeEducationEditModal);
  if (cancelEduEditBtn) cancelEduEditBtn.addEventListener('click', closeEducationEditModal);

  if (addProjectQuickBtn) addProjectQuickBtn.addEventListener('click', () => openEditProjectModal());
  if (openAddProjectModalBtn) openAddProjectModalBtn.addEventListener('click', () => openEditProjectModal());
  if (closeProjectEditBtn) closeProjectEditBtn.addEventListener('click', closeProjectEditModal);
  if (cancelProjectEditBtn) cancelProjectEditBtn.addEventListener('click', closeProjectEditModal);

  // Modal Backdrop Click
  window.addEventListener('click', (e) => {
    const customizer = document.getElementById('customizer-modal');
    const eduModal = document.getElementById('education-edit-modal');
    const projModal = document.getElementById('project-edit-modal');
    if (e.target === customizer) closeCustomizerModal();
    if (e.target === eduModal) closeEducationEditModal();
    if (e.target === projModal) closeProjectEditModal();
  });

  // Modal Tabs Navigation in Customizer
  document.querySelectorAll('#customizer-modal .modal-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) switchModalTab(tabId);
    });
  });

  // Project Filtering Tabs
  document.querySelectorAll('#project-filter-tabs .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#project-filter-tabs .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.currentFilter = btn.getAttribute('data-filter');
      renderProjectsGrid();
    });
  });

  // ---------------------------------------------------------------------------
  // Profile Avatar Upload (File Reader + Live URL preview)
  // ---------------------------------------------------------------------------
  const avatarFileInput = document.getElementById('edit-avatar-file');
  const avatarUrlInput = document.getElementById('edit-avatar-url');
  const avatarPreview = document.getElementById('edit-avatar-preview');
  const resetAvatarBtn = document.getElementById('reset-avatar-default-btn');

  if (avatarFileInput) {
    avatarFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (avatarPreview) avatarPreview.src = dataUrl;
        if (avatarUrlInput) avatarUrlInput.value = dataUrl;
        showToast('Photo chosen from device! Click "Save" to apply.', 'success');
      };
      reader.readAsDataURL(file);
    });
  }

  if (avatarUrlInput) {
    avatarUrlInput.addEventListener('input', (e) => {
      const rawVal = e.target.value.trim();
      const normalized = normalizeImageUrl(rawVal);
      if (avatarPreview) {
        avatarPreview.src = normalized || DEFAULT_AVATAR;
      }
    });
  }

  if (resetAvatarBtn) {
    resetAvatarBtn.addEventListener('click', () => {
      if (avatarUrlInput) avatarUrlInput.value = DEFAULT_AVATAR;
      if (avatarPreview) avatarPreview.src = DEFAULT_AVATAR;
      showToast('Photo reset to default avatar. Click "Save" to apply.', 'success');
    });
  }

  // ---------------------------------------------------------------------------
  // Project Image Upload (File Reader + Live URL preview)
  // ---------------------------------------------------------------------------
  const projFileInput = document.getElementById('proj-image-file');
  const projUrlInput = document.getElementById('proj-image');
  const projPreview = document.getElementById('proj-image-preview');

  if (projFileInput) {
    projFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (projPreview) projPreview.src = dataUrl;
        if (projUrlInput) projUrlInput.value = dataUrl;
        showToast('Project image selected from device!', 'success');
      };
      reader.readAsDataURL(file);
    });
  }

  if (projUrlInput) {
    projUrlInput.addEventListener('input', (e) => {
      const rawVal = e.target.value.trim();
      const normalized = normalizeImageUrl(rawVal);
      if (projPreview) {
        projPreview.src = normalized || DEFAULT_PROJECT_IMG;
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Save Personal Details Form
  // ---------------------------------------------------------------------------
  const formPersonal = document.getElementById('form-personal-details');
  if (formPersonal) {
    formPersonal.addEventListener('submit', (e) => {
      e.preventDefault();
      const rolesInput = document.getElementById('edit-role-titles').value;
      const rolesArray = rolesInput ? rolesInput.split(',').map(r => r.trim()).filter(Boolean) : appState.profile.roles;
      const rawAvatar = document.getElementById('edit-avatar-url').value.trim();

      appState.profile.name = document.getElementById('edit-name').value.trim() || appState.profile.name;
      appState.profile.roles = rolesArray.length ? rolesArray : appState.profile.roles;
      appState.profile.bio = document.getElementById('edit-bio').value.trim();
      appState.profile.aboutDescription = document.getElementById('edit-about').value.trim();
      appState.profile.dsaCount = document.getElementById('edit-dsa-count').value.trim() || appState.profile.dsaCount;
      appState.profile.projectsCount = document.getElementById('edit-projects-count').value.trim() || appState.profile.projectsCount;
      appState.profile.location = document.getElementById('edit-location').value.trim() || appState.profile.location;
      
      if (rawAvatar) {
        appState.profile.avatarUrl = normalizeImageUrl(rawAvatar);
      }

      saveState();
      renderProfileUI();
      if (typewriterInstance) typewriterInstance.updateRoles(appState.profile.roles);
      showToast('Personal details & photo updated and permanently saved!', 'success');
      closeCustomizerModal();
    });
  }

  // ---------------------------------------------------------------------------
  // Save Education Item Form
  // ---------------------------------------------------------------------------
  const educationItemForm = document.getElementById('education-item-form');
  if (educationItemForm) {
    educationItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const eduId = document.getElementById('edu-item-id').value;
      const degree = document.getElementById('edu-degree').value.trim();
      const institution = document.getElementById('edu-institution').value.trim();
      const duration = document.getElementById('edu-duration').value.trim();
      const grade = document.getElementById('edu-grade').value.trim();
      const description = document.getElementById('edu-desc').value.trim();
      
      const sliderVal = document.getElementById('edu-order-pos-slider')?.value;
      const targetPos = sliderVal ? Math.max(0, parseInt(sliderVal) - 1) : 0;

      if (eduId) {
        // Edit existing
        const idx = appState.education.findIndex(e => e.id === eduId);
        if (idx !== -1) {
          const updatedEdu = { id: eduId, degree, institution, duration, grade, description };
          appState.education.splice(idx, 1);
          const safeTarget = Math.min(appState.education.length, targetPos);
          appState.education.splice(safeTarget, 0, updatedEdu);
        }
      } else {
        // Add new at target position
        const newEdu = {
          id: 'edu-' + Date.now(),
          degree,
          institution,
          duration,
          grade,
          description
        };
        const safeTarget = Math.min(appState.education.length, targetPos);
        appState.education.splice(safeTarget, 0, newEdu);
      }

      saveState();
      renderEducationUI();
      renderModalEducationManager();
      closeEducationEditModal();
      showToast(eduId ? 'Education details updated!' : 'New education added & saved!', 'success');
    });
  }

  // ---------------------------------------------------------------------------
  // Save Social Links Form
  // ---------------------------------------------------------------------------
  const formSocials = document.getElementById('form-socials');
  if (formSocials) {
    formSocials.addEventListener('submit', (e) => {
      e.preventDefault();
      appState.profile.email = document.getElementById('edit-email').value.trim() || appState.profile.email;
      appState.profile.github = document.getElementById('edit-github').value.trim();
      appState.profile.linkedin = document.getElementById('edit-linkedin').value.trim();
      appState.profile.leetcode = document.getElementById('edit-leetcode').value.trim();
      appState.profile.resume = document.getElementById('edit-resume').value.trim() || '#';

      saveState();
      renderProfileUI();
      showToast('Social & contact links updated!', 'success');
      closeCustomizerModal();
    });
  }

  // ---------------------------------------------------------------------------
  // Save Project Item Form
  // ---------------------------------------------------------------------------
  const projectItemForm = document.getElementById('project-item-form');
  if (projectItemForm) {
    projectItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const projId = document.getElementById('project-item-id').value;
      const title = document.getElementById('proj-title').value.trim();
      const category = document.getElementById('proj-category').value;
      const tagsStr = document.getElementById('proj-tags').value;
      const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(Boolean) : [category];
      const description = document.getElementById('proj-desc').value.trim();
      const github = document.getElementById('proj-github').value.trim();
      const demo = document.getElementById('proj-demo').value.trim();
      const rawImage = document.getElementById('proj-image').value.trim();
      const image = rawImage ? normalizeImageUrl(rawImage) : DEFAULT_PROJECT_IMG;

      const sliderVal = document.getElementById('proj-order-pos-slider')?.value;
      const targetPos = sliderVal ? Math.max(0, parseInt(sliderVal) - 1) : 0;

      if (projId) {
        const idx = appState.projects.findIndex(p => p.id === projId);
        if (idx !== -1) {
          const updatedProj = { id: projId, title, category, tags, description, github, demo, image };
          appState.projects.splice(idx, 1);
          const safeTarget = Math.min(appState.projects.length, targetPos);
          appState.projects.splice(safeTarget, 0, updatedProj);
        }
      } else {
        const newProj = {
          id: 'proj-' + Date.now(),
          title,
          category,
          tags,
          description,
          github,
          demo,
          image
        };
        const safeTarget = Math.min(appState.projects.length, targetPos);
        appState.projects.splice(safeTarget, 0, newProj);
      }

      saveState();
      renderProjectsGrid();
      renderModalProjectsManager();
      document.getElementById('stat-projects').textContent = `${appState.projects.length}+`;
      closeProjectEditModal();
      showToast(projId ? 'Project updated!' : 'New project added & saved!', 'success');
    });
  }

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Permanent JS Data Generator
  // ---------------------------------------------------------------------------
  function buildPortfolioDataJsCode() {
    const dataObj = {
      profile: appState.profile,
      education: appState.education,
      projects: appState.projects
    };

    return `/**
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
 * 3. Go to the "Permanent Save & Export" tab and click "Download portfolio-data.js"
 * 4. Replace this file in your project folder and push to GitHub!
 * 
 * OR: Edit this file directly in VS Code / text editor and push to GitHub.
 * =============================================================================
 */

window.PORTFOLIO_DATA = ${JSON.stringify(dataObj, null, 2)};
`;
  }

  // ---------------------------------------------------------------------------
  // Permanent JS Data File Download
  // ---------------------------------------------------------------------------
  const downloadDataBtn = document.getElementById('download-data-file-btn');
  if (downloadDataBtn) {
    downloadDataBtn.addEventListener('click', () => {
      const fileContent = buildPortfolioDataJsCode();
      const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio-data.js';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('portfolio-data.js downloaded! Replace it in your project folder & push to GitHub.', 'success');
    });
  }

  // ---------------------------------------------------------------------------
  // Permanent JS Data Code Copy
  // ---------------------------------------------------------------------------
  const copyDataBtn = document.getElementById('copy-data-code-btn');
  if (copyDataBtn) {
    copyDataBtn.addEventListener('click', () => {
      const fileContent = buildPortfolioDataJsCode();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(fileContent).then(() => {
          showToast('Code copied! Paste into portfolio-data.js, save & push to GitHub.', 'success');
        }).catch(() => {
          showToast('Could not access clipboard. Please use Download button.', 'danger');
        });
      } else {
        showToast('Clipboard API not available. Please use Download button.', 'danger');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Backup & JSON Export
  // ---------------------------------------------------------------------------
  const exportBtn = document.getElementById('export-json-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const dataToExport = {
        profile: appState.profile,
        education: appState.education,
        projects: appState.projects,
        exportDate: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `portfolio_config_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Config exported as JSON file!', 'success');
    });
  }

  // ---------------------------------------------------------------------------
  // Backup & JSON Import
  // ---------------------------------------------------------------------------
  const importFile = document.getElementById('import-json-file');
  if (importFile) {
    importFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.profile) appState.profile = parsed.profile;
          if (parsed.education) appState.education = parsed.education;
          if (parsed.projects) appState.projects = parsed.projects;
          
          saveState();
          renderProfileUI();
          renderEducationUI();
          renderProjectsGrid();
          renderModalEducationManager();
          renderModalProjectsManager();
          if (typewriterInstance) typewriterInstance.updateRoles(appState.profile.roles);
          showToast('Portfolio data imported successfully!', 'success');
          closeCustomizerModal();
        } catch (err) {
          showToast('Failed to parse JSON configuration', 'danger');
        }
      };
      reader.readAsText(file);
    });
  }

  // ---------------------------------------------------------------------------
  // Reset to Defaults
  // ---------------------------------------------------------------------------
  const resetBtn = document.getElementById('reset-defaults-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all data back to the base portfolio-data.js?')) {
        localStorage.removeItem(STORAGE_KEYS.PROFILE);
        localStorage.removeItem(STORAGE_KEYS.EDUCATION);
        localStorage.removeItem(STORAGE_KEYS.PROJECTS);
        appState.profile = { ...DEFAULT_PROFILE };
        appState.education = [...DEFAULT_EDUCATION];
        appState.projects = [...DEFAULT_PROJECTS];
        renderProfileUI();
        renderEducationUI();
        renderProjectsGrid();
        renderModalEducationManager();
        renderModalProjectsManager();
        if (typewriterInstance) typewriterInstance.updateRoles(appState.profile.roles);
        showToast('All portfolio data reset to portfolio-data.js values!', 'success');
        closeCustomizerModal();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Email Copy Button
  // ---------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(appState.profile.email).then(() => {
        showToast(`Email copied: ${appState.profile.email}`, 'success');
      }).catch(() => {
        showToast('Could not copy email to clipboard', 'danger');
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Contact Form Submission
  // ---------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      const mailtoLink = `mailto:${encodeURIComponent(appState.profile.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailtoLink;

      showToast(`Thank you, ${name}! Your email draft has been opened.`, 'success');
      contactForm.reset();
    });
  }
}

// =============================================================================
// 10. INITIALIZATION LIFECYCLE
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initAppState();
  renderProfileUI();
  initTypewriter();
  initParticleCanvas();
  dsaVisualizer.init();
  initTerminal();
  bindAppEvents();

  console.log("⚡ Developer Portfolio Initialized Successfully with Photo Uploader & Persistence!");
});
