import axios from "axios";

const BASE_URL = "http://localhost:5000";

export async function fetchSchedulesByDeviceId(deviceId) {
  const token = localStorage.getItem("access_token");
  const res = await axios.get(`${BASE_URL}/schedule/feedings/${deviceId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function postScheduleFeeding(feeding) {
  const token = localStorage.getItem("access_token");
  const res = await axios.post(`${BASE_URL}/schedule/feedings`, feeding, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function patchScheduleFeeding(id, feeding) {
  const token = localStorage.getItem("access_token");
  const res = await axios.patch(`${BASE_URL}/schedule/feedings/${id}`, feeding, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
