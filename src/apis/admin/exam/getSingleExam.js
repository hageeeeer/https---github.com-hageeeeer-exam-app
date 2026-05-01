import axios from "axios";

export async function getSingleExam(examId) {
  const token  = localStorage.getItem('token')
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/exams/${examId}`,
    {
      headers: {
        token
      },
    },
  );

  return data;
}
