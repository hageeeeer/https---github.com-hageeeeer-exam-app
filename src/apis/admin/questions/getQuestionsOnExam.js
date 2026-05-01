import axios from "axios";

export async function getQuestionsOnExam(examId) {
  const token  = localStorage.getItem('token')
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/questions?exam=${examId}`, {
    headers: {
      token
    },
  });

  return data;
}

