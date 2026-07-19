import { useState } from "react";
import { generate } from "../api/generate";
import ResultCard from "../components/ResultCard";

export default function CodeExplainer() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await generate("explain", { code });
      setResult(res);
    } catch (e) {
      setResult("Something went wrong. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Code Explainer</h1>
      <textarea
        className="w-full h-40 p-3 border rounded"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Explain
      </button>
      <ResultCard result={result} loading={loading} />
    </div>
  );
}