import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import DeviceInfo from "../components/device/DeviceList";
import NextFeeding from "../components/nextFeeding/NextFeeding";
import FeedingForm from "../components/feedingForm/FeedingForm";
import FeedingList from "../components/feedingList/FeedingList";
import FeedingLog from "../components/feedingLog/feedingLog";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`

export default function DeviceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editFeedingId, setEditFeedingId] = useState(null);
  const [editedTime, setEditedTime] = useState("");
  const [editedEnabled, setEditedEnabled] = useState(true);
  const [editedWeekdays, setEditedWeekdays] = useState([]);

  const [device, setDevice] = useState(null);
  const [scheduleFeedings, setScheduleFeedings] = useState([]);
  const [nextFeeding, setNextFeeding] = useState(null);
  const [error, setError] = useState("");
  const [newFeedingTime, setNewFeedingTime] = useState("");
  const [newFeedingEnabled, setNewFeedingEnabled] = useState(true);
  const [newFeedingWeekdays, setNewFeedingWeekdays] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDeviceInfo();
    fetchSchedules();
  }, [id]);

  const combineTodayWithTime = (timeHHmm) => {
    if (!timeHHmm) return null;
    const [hours, minutes] = timeHHmm.split(":");
    const now = new Date();
    now.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
    return now.toISOString();
  };

  const startEditing = (schedule) => {
    const date = new Date(schedule.time_to_feed);
    
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    setEditFeedingId(schedule.id);
    setEditedTime(`${hours}:${minutes}`); // зберігаємо тільки час
    setEditedEnabled(schedule.enabled);
    setEditedWeekdays(schedule.weekdays || []);
  };

  const fetchDeviceInfo = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`http://localhost:5000/device/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDevice(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Помилка завантаження девайса");
    }
  };

  const deleteFeeding = async (feedingId) => {
    const confirmed = window.confirm("Ви впевнені, що хочете видалити це годування?");
    if (!confirmed) return;

    try {
      const token = localStorage.getItem("access_token");
      await axios.delete(`http://localhost:5000/schedule_feeding/${feedingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchSchedules();
    } catch (err) {
      setError(err.response?.data?.error || "Помилка видалення годування");
    }
  };

  const fetchSchedules = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`http://localhost:5000/schedule_feeding`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { device_id: id },
      });
      setScheduleFeedings(res.data);

      const now = new Date();
      const next = res.data
        .filter((s) => s.enabled && new Date(s.time_to_feed) > now)
        .sort((a, b) => new Date(a.time_to_feed) - new Date(b.time_to_feed))[0];
      setNextFeeding(next);
    } catch (err) {
      setError(err.response?.data?.error || "Помилка завантаження графіків годування");
    }
  };

  const handleUpdateFeeding = async () => {
    try {
      const token = localStorage.getItem("access_token");
      await axios.patch(
        `http://localhost:5000/schedule_feeding/${editFeedingId}`,
        {
          time_to_feed: combineTodayWithTime(editedTime),
          enabled: editedEnabled,
          weekdays: editedWeekdays,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditFeedingId(null);
      await fetchSchedules();
    } catch (err) {
      setError(err.response?.data?.error || "Помилка оновлення таймера");
    }
  };

  const handleAddFeeding = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!newFeedingTime) {
      setError("Вкажіть час годування");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      await axios.post(
        "http://localhost:5000/schedule_feeding",
        {
          device_id: id,
          time_to_feed: combineTodayWithTime(newFeedingTime),
          enabled: newFeedingEnabled,
          weekdays: newFeedingWeekdays,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNewFeedingTime("");
      setNewFeedingEnabled(true);
      setNewFeedingWeekdays([]);
      await fetchSchedules();
    } catch (err) {
      setError(err.response?.data?.error || "Помилка додавання годування");
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!device) return <p>Завантаження даних девайса...</p>;

  return (
    <div>
      <Header />
      <DeviceInfo device={device} navigate={navigate} />
      <List>
        <NextFeeding nextFeeding={nextFeeding} />
        <FeedingForm
        newFeedingTime={newFeedingTime}
        setNewFeedingTime={setNewFeedingTime}
        newFeedingEnabled={newFeedingEnabled}
        setNewFeedingEnabled={setNewFeedingEnabled}
        newFeedingWeekdays={newFeedingWeekdays}
        setNewFeedingWeekdays={setNewFeedingWeekdays}
        handleAddFeeding={handleAddFeeding}
        loading={loading}
      />
      </List>
      <List>
        <FeedingLog
          deviceId={id}
        />
        <FeedingList
          scheduleFeedings={scheduleFeedings}
          editFeedingId={editFeedingId}
          editedTime={editedTime}
          editedEnabled={editedEnabled}
          editedWeekdays={editedWeekdays}
          setEditFeedingId={setEditFeedingId}
          setEditedTime={setEditedTime}
          setEditedEnabled={setEditedEnabled}
          setEditedWeekdays={setEditedWeekdays}
          startEditing={startEditing}
          handleUpdateFeeding={handleUpdateFeeding}
          handleDeleteFeeding={deleteFeeding}
        />
      </List>
      <Footer />
    </div>
  );
}
