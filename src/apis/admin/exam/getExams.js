import axios from "axios";

export async function getExams() {
  const token  = localStorage.getItem('token')
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/exams`, {
    headers: {
      token
    },
  });

  return data;
}
