import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 flex flex-wrap gap-x-12 gap-y-3 border-b items-center">
      <Link to="/" className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600">Idea Generator</Link>
      <Link to="/roadmap" className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600">Roadmap</Link>
      <Link to="/explain" className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600">Code Explain</Link>
      <Link to="/debug" className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600">Bug Fixer</Link>
      <Link to="/readme" className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600">README</Link>
      <Link to="/interview" className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600">Interview</Link>
    </nav>
  );
}