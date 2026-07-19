import { useState } from "react";
import { generate } from "../api/generate";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

export default function Interview() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const response = await generate("interview", { project: input });
      setResult(response);
    } catch (error) {
      setResult("Error generating response");
    }
    setLoading(false);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">AI Interview Prep</h1>
      <textarea
        className="border p-3 w-full rounded"
        placeholder="Describe your project for an interview question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="mt-4 px-5 py-2 bg-black text-white rounded"
        onClick={handleGenerate}
      >
        Get Interview Question
      </button>
      {loading && <Loader />}
      {result && <ResultCard result={result} />}
    </div>
  );
}