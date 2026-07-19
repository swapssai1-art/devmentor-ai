import { useState, useContext } from "react";
import { generate } from "../api/generate";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import { ProjectContext } from "../context/ProjectContext";

export default function IdeaGenerator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const { setProject } = useContext(ProjectContext);

  async function handleGenerate() {
    setLoading(true);

    try {
      const response = await generate("idea", { idea: input });
      setResult(response);
      setProject({ name: input, description: response });
    } catch (error) {
      setResult("Error generating response");
    }

    setLoading(false);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        AI Project Idea Generator
      </h1>

      <textarea
        className="border p-3 w-full rounded"
        placeholder="Enter your interests..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="mt-4 px-5 py-2 bg-black text-white rounded"
        onClick={handleGenerate}
      >
        Generate
      </button>

      {loading && <Loader />}
      {result && <ResultCard result={result} />}
    </div>
  );
}