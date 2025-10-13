import "./App.css";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/Profile";
import GitHubStatus from "./components/GitHubStatus";
import ProjectsPage from "./components/ProjectsPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsSection from "./components/SkillsSection.tsx";

function HomePage() {
  return (
    <>
      <ProfileSection />
      <GitHubStatus />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
