# ⚡ Modern Developer Portfolio & Interactive Engineering Showcase

<div align="center">

  <!-- Badges -->
  <a href="https://github.com">
    <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=git" alt="Status" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-Modern_Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" />
  </a>
  <img src="https://img.shields.io/badge/Responsive-Mobile--Friendly-9cf?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Responsive" />

  <br/><br/>

  <h3>✨ A dynamic, high-performance developer portfolio featuring an in-browser live profile customizer, interactive DSA algorithm visualizer, and developer terminal emulator.</h3>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-how-to-push-to-github">Push to GitHub</a> •
    <a href="#-deployment-guide">Free Deployment</a> •
    <a href="#-customization">Customization</a> •
    <a href="#-license">License</a>
  </p>

</div>

---

## 📸 Overview

This repository contains a **production-ready, ultra-modern developer portfolio** built with pure Vanilla web technologies (zero heavy frameworks, zero build bloat). It is designed to create an unforgettable impression on recruiters, engineering managers, and clients.

### 🌟 Why This Portfolio Stands Out
- **Zero Build Step Required**: Runs instantly in any browser with pure HTML5, CSS3, and ES6+ JavaScript.
- **Built-in Live Customizer**: Update your name, skills, bio, avatar, projects, and education in real-time through an interactive UI drawer, saved automatically into `localStorage` with JSON export/import support.
- **DSA Lab Visualizer**: Interactive visualizations for core Data Structures & Algorithms (Bubble Sort, Binary Search, Stack, and Linked List) with speed control and step logs.
- **Interactive Developer CLI Terminal**: A functional command-line emulator featuring rich commands (`help`, `skills`, `projects`, `dsa`, `matrix`, `theme`, `clear`, etc.).
- **Fluid Cyberpunk / Glassmorphism Aesthetic**: Dynamic particle canvas, ambient glowing background blobs, smooth micro-animations, and responsive cards.

---

## 🚀 Key Features

| Feature | Description |
| :--- | :--- |
| 🎛️ **Live In-Browser Customizer** | Customize profile bio, avatar image, stats, social links, education items, and projects without touching source code. |
| 🧠 **Interactive DSA Lab** | Visual algorithm demonstrations with play/pause, step stepping, variable speed, and complexity analysis. |
| 💻 **Interactive CLI Terminal** | Full-featured terminal interface with tab autocompletion, matrix easter-egg, system diagnostics, and color output. |
| 🗂️ **Categorized Projects Showcase** | Filter projects by tech stack (Python, Java, C, Web, DSA) with modal detailed views and external links. |
| 🎓 **Education & Career Timeline** | Beautiful academic milestones with degree badges, CGPA highlights, and coursework summaries. |
| ⚡ **Particle Canvas Background** | Interactive, particle-linked HTML5 Canvas background that responds to ambient animations. |
| 📱 **100% Fully Responsive** | Pixel-perfect on mobile phones, tablets, laptops, and ultra-wide displays. |
| 💾 **Data Persistence & Portability** | Saves customizations locally and allows 1-click JSON backup & restore. |

---

## 🛠️ Tech Stack

- **Markup**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic, Accessible, SEO-optimized)
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (CSS Custom Properties, Glassmorphism, Flexbox, Grid, Keyframe Animations)
- **Scripting**: [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Vanilla JS, Canvas API, DOM Manipulation, Web Storage API)
- **Typography**: [Google Fonts](https://fonts.google.com/) (*Outfit*, *JetBrains Mono*, *Space Grotesk*)
- **Icons**: [FontAwesome 6.5.1](https://fontawesome.com/)

---

## 📂 Project Structure

```text
my-portfolio/
│
├── index.html       # Primary semantic HTML structure and sections
├── style.css        # Core styling, responsive design tokens & glassmorphism system
├── script.js        # Portfolio engine: customizer, terminal, DSA lab, particle canvas
└── README.md        # Documentation and GitHub setup guide
```

---

## ⚡ Quick Start

### Option 1: Direct File Preview
Simply double click `index.html` or open it with your favorite browser (Google Chrome, Firefox, Edge, Safari).

### Option 2: Live Server (VS Code Extension)
1. Open this folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension by *Ritwick Dey*.
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Python Local Server
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📤 How to Push to GitHub

Follow these simple steps in your terminal or Command Prompt to push this portfolio to your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Go to [GitHub.com](https://github.com/new) and log in.
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `portfolio` or `<your-username>.github.io`).
4. Set visibility to **Public**.
5. **Do NOT** check "Add a README file" (we already have this complete one!).
6. Click **Create repository**.

### Step 2: Initialize Git and Push from Local

Open a terminal (PowerShell, Command Prompt, or Git Bash) in the project folder and run:

```bash
# 1. Initialize git repository (if not already initialized)
git init

# 2. Stage all project files
git add .

# 3. Commit the changes
git commit -m "Initial commit: Modern developer portfolio with DSA lab and live customizer"

# 4. Set the default branch to main
git branch -M main

# 5. Link your local repo to your GitHub remote repository
# (Replace <YOUR-USERNAME> and <YOUR-REPO-NAME> with your actual GitHub info)
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 6. Push your code to GitHub
git push -u origin main
```

---

## 🌐 Free 1-Click Deployment Guide

Host your portfolio online for **100% free** using any of the following platforms:

### 1. GitHub Pages (Recommended)
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **`Deploy from a branch`**.
4. Choose Branch: `main` and Folder: `/ (root)`.
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

### 2. Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New"** > **"Project"**.
3. Select your portfolio repository.
4. Click **Deploy**. Vercel will instantly generate a live `.vercel.app` URL with automatic SSL.

### 3. Netlify
1. Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub repository and click **Deploy site**.

---

## 🎨 Personalizing Your Details

### Method 1: Using the In-Browser Customizer (Fastest & No Code)
1. Launch the website.
2. Click the **"Edit Profile & Projects"** button in the top navigation bar or the **"Customize Site"** button in the hero section.
3. Edit your:
   - **Profile details**: Name, roles, bio, contact email, social links (GitHub, LinkedIn, LeetCode, Resume).
   - **Avatar & Images**: Paste image URLs or upload images directly.
   - **Projects**: Add new projects, edit titles, descriptions, categories, and links.
   - **Education**: Add and update degrees, universities, and grades.
4. Click **"Save Changes"**. Your details will instantly update and persist in your browser.
5. Click **"Export JSON"** to download a backup of your configuration.

### Method 2: Editing Source Code Directly
You can also permanently change default values in `script.js`:
- Open `script.js` and modify `DEFAULT_PROFILE`, `DEFAULT_EDUCATION`, and `DEFAULT_PROJECTS` at the top of the file (lines 20–100).
- Open `index.html` to customize metadata title and description tags.

---

## ⌨️ Developer Terminal Commands

Try running these commands in the on-page terminal:

| Command | Action |
| :--- | :--- |
| `help` | Lists all available terminal commands |
| `about` | Displays developer summary and focus areas |
| `skills` | Lists technical competencies across languages and tools |
| `projects` | Shows featured engineering projects |
| `dsa` | Displays algorithm and problem-solving stats |
| `contact` | Prints social links and contact email |
| `matrix` | Toggles dynamic green matrix digital rain mode |
| `clear` | Clears the terminal output screen |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repository, make your modifications, and submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ and dedication to clean engineering. Don't forget to star ⭐ this repository if you find it helpful!</sub>
</div>
