import axios from "axios";

export async function addExam(formData) {
  const token  = localStorage.getItem('token')
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/exams`, formData , {
    headers: {
      token
    },
  });

  return data;
}
