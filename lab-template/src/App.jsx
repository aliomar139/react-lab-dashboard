import LabOverview from "./components/LabOverview";

const welcome = {
  course: "IN401 Cloud",
  instructor: "Ali Omar",
  term: "Fall",
  description: "testing",
};

const currentLab = {
  topics: ["JSX Basics", "Rendering", "Testing"],
  duration: "90 minutes",
  deliveryMode: "In-person",
  children: "Focus on writing semantic JSX and using the lab theme classes.",
};

const nextLab = {
  topics: "Props & Reusable Components",
  duration: "90 minutes",
  deliveryMode: "In-person",
  note: "Prepare questions about prop drilling and component structure.",
};

const labResources = [
  {
    id: "guide",
    title: "Lab Instructions",
    description: "Step-by-step guide stored in React_Lab_Ch01-05_Student.md.",
  },
  {
    id: "slides",
    title: "Slides Chapters 01-05",
    description: "Overview of key concepts covered so far.",
  },
  {
    id: "cheatsheet",
    title: "JSX Cheatsheet",
    description: "Common patterns and syntax reminders.",
  },
  {
    id: "css",
    title: "Lab Theme Styles",
    description: "Reference for available CSS classes.",
    badge: "NEW",
  },
];

const welcomeAlt = {
  course: "IN402 Web Application Architecture",
  instructor: "Sara Khalil",
  term: "Spring",
  description: "Overview dashboard for the upcoming web systems module.",
};

const currentLabAlt = {
  topics: ["Component Design", "State Management", "Event Handling"],
  duration: "120 minutes",
  deliveryMode: "Hybrid",
  children:
    "Students will build interactive components and manage local state using hooks.",
};

const nextLabAlt = {
  topics: "Context API & Performance Optimization",
  duration: "90 minutes",
  deliveryMode: "Online",
  note:
    "Review previous lab code and identify components that can benefit from shared state.",
};

const labResourcesAlt = [
  {
    id: "repo",
    title: "Starter Repository",
    description: "Git repository containing boilerplate code and project structure.",
  },
  {
    id: "video",
    title: "Recorded Walkthrough",
    description: "Video explanation of the lab requirements and expected outcomes.",
  },
  {
    id: "docs",
    title: "React Hooks Reference",
    description: "Official documentation for React hooks.",
  },
  {
    id: "ui",
    title: "UI Component Guidelines",
    description: "Accessibility and design best practices.",
    badge: "UPDATED",
  },
];

function App() {
  return (
    <main className="layout">
      <LabOverview
        welcome={welcome}
        current={currentLab}
        upcoming={nextLab}
        resources={labResources}
      />

      <LabOverview
        welcome={welcomeAlt}
        current={currentLabAlt}
        upcoming={nextLabAlt}
        resources={labResourcesAlt}
      />
    </main>
  );
}

export default App;
