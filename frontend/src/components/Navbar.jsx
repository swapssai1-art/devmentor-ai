import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-6 border-b">
      <Link to="/">Idea Generator</Link>
      <Link to="/roadmap">Roadmap</Link>
      <Link to="/explain">Code Explain</Link>
      <Link to="/debug">Bug Fixer</Link>
      <Link to="/readme">README</Link>
      <Link to="/interview">Interview</Link>
    </nav>
  );
}