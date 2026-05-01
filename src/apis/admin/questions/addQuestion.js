import axios from "axios";

export async function addQuestionFun(formData) {
  const token  = localStorage.getItem('token')
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/questions`,formData,
    {
      headers: {
        token
      },
    },
  );

 


  return data
}
