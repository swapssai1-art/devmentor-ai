import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function generate(mode, input) {
  const res = await axios.post(`${API_URL}/api/generate`, { mode, input });
  return res.data.result;
}