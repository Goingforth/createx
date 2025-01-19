import axios from "axios";
const VITE_API_BASE = import.meta.env.VITE_API_BASE;

export default axios.create({
  baseURL: `${VITE_API_BASE}`,
});
