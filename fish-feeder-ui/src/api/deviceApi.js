import axios from "axios";

export async function fetchDeviceById(id) {
  const token = localStorage.getItem("access_token");
  const res = await axios.get(`http://localhost:5000/device/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
