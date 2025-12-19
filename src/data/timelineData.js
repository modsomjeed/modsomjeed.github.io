/* Timeline Data - Structured project & work experience data */

export const timelineData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    dateRange: "Jan 2025 - Present",
    tags: ["self"],
    type: "project",
    projectDetail:
      "Building a brag-worthy personal portfolio to showcase work, lessons learned, and technical skills. Includes timeline, project details, and lessons learned sections.",
    tools: ["React", "Next.js", "SCSS", "GitHub Actions"],
    skills: ["Frontend Development", "Web Design", "Git"],
    lessons: [
      "Importance of structured data management for maintainability",
      "Tag-based filtering improves UX for portfolio browsing",
      "Vertical timeline layout provides better storytelling"
    ],
    links: [
      { label: "Live", url: "https://modsomjeed.github.io" },
      { label: "GitHub", url: "https://github.com/modsomjeed/modsomjeed.github.io" }
    ],
    impact: "Improved personal brand presence and makes it easier to showcase achievements",
    context:
      "Realized need for a better way to document and present technical work and learnings",
    whatYouDid:
      "Architected data-driven portfolio with reusable components, implemented filtering system, and created lessons learned aggregation"
  },
  {
    id: 2,
    title: "E-Commerce Platform Enhancement",
    dateRange: "Jul 2024 - Dec 2024",
    tags: ["team", "client"],
    type: "work",
    projectDetail:
      "Led frontend improvements for an e-commerce platform serving 10K+ daily users. Implemented performance optimizations and new features.",
    tools: ["React", "TypeScript", "Redux", "Jest", "GraphQL"],
    skills: ["React", "TypeScript", "Performance Optimization", "Team Leadership"],
    lessons: [
      "Clear communication with cross-functional teams reduces rework",
      "Implementing measurements first guides optimization efforts",
      "User feedback loops are crucial for prioritization"
    ],
    links: [
      { label: "Case Study", url: "#" }
    ],
    impact:
      "Reduced page load time by 40%, increased user engagement by 25%, achieved 98% Lighthouse score",
    context: "Client platform was experiencing slowdowns during peak traffic periods",
    whatYouDid:
      "Identified bottlenecks, implemented code splitting, optimized images, refactored Redux selectors, mentored team on performance best practices"
  },
  {
    id: 3,
    title: "Design System Implementation",
    dateRange: "Mar 2024 - Jun 2024",
    tags: ["team", "self"],
    type: "project",
    projectDetail:
      "Built comprehensive design system with 40+ reusable React components, documentation, and Storybook integration.",
    tools: ["React", "Storybook", "SCSS", "TypeScript", "Jest"],
    skills: ["Component Architecture", "Design Patterns", "Documentation"],
    lessons: [
      "Investing in foundations saves time across the team",
      "Good documentation is as important as good code",
      "Storybook-driven development catches edge cases early"
    ],
    links: [
      { label: "Storybook", url: "#" }
    ],
    impact:
      "Reduced component creation time by 60%, improved consistency across 5+ projects, served 30+ developers",
    context:
      "Multiple teams were building similar components independently, causing duplication and inconsistency",
    whatYouDid:
      "Conducted audit of existing components, established design principles, built Storybook, created component guidelines"
  },
  {
    id: 4,
    title: "Mobile App Migration to React Native",
    dateRange: "Jan 2024 - Feb 2024",
    tags: ["team", "ODT"],
    type: "work",
    projectDetail:
      "Coordinated migration of native iOS/Android apps to React Native with a team of 4 developers.",
    tools: ["React Native", "Expo", "TypeScript", "Firebase", "React Navigation"],
    skills: ["React Native", "Cross-platform Development", "Project Coordination"],
    lessons: [
      "Code sharing between platforms is powerful but requires discipline",
      "Platform-specific differences still require specialized knowledge",
      "Gradual migration reduces risk better than big-bang rewrites"
    ],
    links: [
      { label: "App Store", url: "#" }
    ],
    impact:
      "Reduced development time by 40%, improved code maintainability, expanded team's mobile capabilities",
    context: "Maintaining separate iOS and Android codebases was becoming expensive and slow",
    whatYouDid:
      "Led migration planning, established code organization patterns, built shared utilities, managed team coordination"
  },
  {
    id: 5,
    title: "Real-time Collaboration Feature",
    dateRange: "Nov 2023 - Dec 2023",
    tags: ["team"],
    type: "project",
    projectDetail:
      "Implemented WebSocket-based real-time collaboration for a web editor, supporting concurrent editing and presence indicators.",
    tools: ["Node.js", "Socket.io", "React", "PostgreSQL", "Redis"],
    skills: ["WebSocket", "Real-time Systems", "Backend Development"],
    lessons: [
      "Handling real-time synchronization requires careful state management",
      "Optimistic updates improve perceived performance",
      "Testing real-time features requires different strategies than traditional testing"
    ],
    links: [
      { label: "Demo", url: "#" }
    ],
    impact:
      "Enabled new collaboration workflows, increased user retention by 15%, opened new product capabilities",
    context:
      "Users requested ability to collaborate on documents simultaneously without conflicts",
    whatYouDid:
      "Designed real-time protocol, implemented conflict resolution, built presence system, optimized network messages"
  }
];

// Category definitions for filtering
export const tagDefinitions = {
  self: { label: "Self Projects", color: "#FF6B6B", description: "Personal projects" },
  team: {
    label: "Team Work",
    color: "#4ECDC4",
    description: "Collaborative team projects"
  },
  ODT: { label: "ODT (On-the-Job Training)", color: "#45B7D1", description: "Learning projects" },
  client: { label: "Client Work", color: "#FFA07A", description: "Client-facing projects" }
};

// Lesson categories for the Lessons Learned page
export const lessonCategories = {
  Collaboration: [],
  Delivery: [],
  Quality: [],
  Architecture: [],
  Stakeholder: []
};

// Extract and categorize lessons
export const getAllLessons = () => {
  const allLessons = [];
  const categorized = { ...lessonCategories };

  timelineData.forEach((item) => {
    item.lessons.forEach((lesson) => {
      const lessonObj = {
        text: lesson,
        source: item.title,
        tags: item.tags
      };
      allLessons.push(lessonObj);

      // Auto-categorize based on keywords
      if (
        lesson.toLowerCase().includes("team") ||
        lesson.toLowerCase().includes("communication")
      ) {
        categorized.Collaboration.push(lessonObj);
      } else if (
        lesson.toLowerCase().includes("priorit") ||
        lesson.toLowerCase().includes("feedback")
      ) {
        categorized.Stakeholder.push(lessonObj);
      } else if (
        lesson.toLowerCase().includes("test") ||
        lesson.toLowerCase().includes("quality")
      ) {
        categorized.Quality.push(lessonObj);
      } else if (
        lesson.toLowerCase().includes("foundation") ||
        lesson.toLowerCase().includes("architect")
      ) {
        categorized.Architecture.push(lessonObj);
      } else {
        categorized.Delivery.push(lessonObj);
      }
    });
  });

  return { allLessons, categorized };
};
