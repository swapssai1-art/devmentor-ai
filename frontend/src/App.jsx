import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IdeaGenerator from "./pages/IdeaGenerator";
import Roadmap from "./pages/Roadmap";
import CodeExplainer from "./pages/CodeExplainer";
import BugFixer from "./pages/BugFixer";
import ReadmeGenerator from "./pages/ReadmeGenerator";
import Interview from "./pages/Interview";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IdeaGenerator />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/explain" element={<CodeExplainer />} />
        <Route path="/debug" element={<BugFixer />} />
        <Route path="/readme" element={<ReadmeGenerator />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
}