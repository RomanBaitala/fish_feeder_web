import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title,LogItem,LogList,ErrorText } from "./feedingLog.styled";

export default function FeedingLog({ deviceId }) {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFeedingLogs();
  }, [deviceId]);

  const fetchFeedingLogs = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get("http://localhost:5000/feedings", {
        headers: { Authorization: `Bearer ${token}` },
        params: { device_id: deviceId },
      });
      console.log(res.data)
      setLogs(res.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Помилка завантаження логів годувань");
    }
  };

  if (error) return <ErrorText>{error}</ErrorText>;

  return (
    <Container>
      <Title>Логи годувань</Title>
      {logs.length === 0 ? (
        <p style={{ textAlign: "center" }}>Немає записів</p>
      ) : (
        <LogList>
          {logs.map((log) => (
            <LogItem key={log.id} success={log.success}>
              {new Date(log.timestamp).toUTCString().slice(0, 19)} —{" "}
              {log.success ? "Успішно" : "Помилка"}{" "}
            </LogItem>
          ))}
        </LogList>
      )}
    </Container>
  );
}
