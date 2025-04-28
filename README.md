<h1 align="center">SaveBirds.app - Ongoing Projects Frontend</h1>

# 1. Overview
This repository contains the frontend implementation of the Ongoing Projects page for SaveBirds.app, built with Vue 3 and Bootstrap 5. This page showcases various research projects that utilize the SaveBirds application, along with the team members involved in each project.

# 2. Project Structure
```
savebirds-ongoing-projects/
├── images/
│   ├── icons/           # Project and UI icons
│   ├── team/            # Team member profile images
│   └── Ongoing-Projects-*.png  # Design reference images
├── src/
│   ├── components/
│   │   └── projects/
│   │       ├── ProjectCard.vue         # Project card component
│   │       └── TeamMemberMiniCard.vue  # Team member mini card component
│   ├── router/
│   │   └── index.js     # Vue Router configuration
│   ├── views/
│   │   └── OngoingProjectsView.vue  # Main ongoing projects page
│   ├── App.vue          # Root Vue component
│   └── main.js          # Application entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

# 3. Features
- Responsive design that works on mobile, tablet, and desktop
- Project cards with team member information
- Social media links for team members
- External links to project resources

# 4. Getting Started

## 4.1. Prerequisites
- Node.js (v14 or newer)
- npm (v6 or newer)

## 4.2. Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/savebirds-ongoing-projects.git
cd savebirds-ongoing-projects
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 4.3. Building for Production
```bash
npm run build
```

# 5. Requirements
This project was developed based on the specifications in the [7-ongoing-projects.md](7-ongoing-projects.md) file, which details the layout structure, visual design, and component specifications.

# 6. Implementation Notes
- Built with Vue 3 Composition API
- Uses Bootstrap 5 for styling and responsive layout
- Implements Bootstrap Icons for social media and UI elements
- Uses Vue Router for navigation (though this is a single-page implementation)