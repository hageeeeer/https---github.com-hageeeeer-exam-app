import axios from "axios";

export async function getDiplomas() {
  const token  = localStorage.getItem('token')
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/subjects`, {
    headers: {
      token
    }
  });

  return data;
}
