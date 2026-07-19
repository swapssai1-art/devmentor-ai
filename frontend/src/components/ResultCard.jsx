export default function ResultCard({ result, loading }) {
  if (loading) return <div className="animate-pulse text-gray-500">Thinking...</div>;
  if (!result) return null;
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow whitespace-pre-wrap">
      {result}
    </div>
  );
}