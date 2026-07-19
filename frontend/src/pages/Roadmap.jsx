import { useState } from "react";
import { generate } from "../api/generate";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

export default function Roadmap() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);

    try {
      const response = await generate("roadmap", { topic: input });
      setResult(response);
    } catch {
      setResult("Error generating response");
    }

    setLoading(false);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        AI Roadmap Generator
      </h1>

      <textarea
        className="border p-3 w-full rounded"
        placeholder="What do you want to learn?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="mt-4 px-5 py-2 bg-black text-white rounded"
        onClick={handleGenerate}
      >
        Generate Roadmap
      </button>

      {loading && <Loader />}
      {result && <ResultCard result={result} />}
    </div>
  );
}