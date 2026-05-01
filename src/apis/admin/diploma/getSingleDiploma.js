import axios from "axios";

export async function getSingleDiploma(subId) {
  const token  = localStorage.getItem('token')
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/subjects/${subId}`, {
    headers: {
      token
    },
  });

  return data;
}
