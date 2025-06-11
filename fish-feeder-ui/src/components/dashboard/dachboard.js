import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  PageWrapper,
  Title,
  DeviceList,
  DeviceItem,
  Button,
  TokenInput,
  ErrorMessage,
  TopBar,
} from './dashboard.styled';

export default function DevicePage() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState('');
  const [showTokenGenerator, setShowTokenGenerator] = useState(false);
  const [generatedToken, setGeneratedToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const res = await axios.get('http://localhost:5000/device', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDevices(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Помилка завантаження девайсів');
    }
  };

  const generateToken = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const res = await axios.get('http://localhost:5000/generate-token', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGeneratedToken(res.data.token);
    } catch (err) {
      setError(err.response?.data?.error || 'Помилка генерації токена');
    }
  };

  const handleDeviceClick = (id) => {
    navigate(`/device/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <PageWrapper>
      <TopBar>
        <Title>Список девайсів</Title>
        <Button onClick={handleLogout}>Вийти</Button>
      </TopBar>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <DeviceList>
        {devices.map((device) => (
          <DeviceItem key={device.id} onClick={() => handleDeviceClick(device.id)}>
            {device.name} (ID: {device.id})
          </DeviceItem>
        ))}
      </DeviceList>

      <Button onClick={() => setShowTokenGenerator(!showTokenGenerator)}>
        {showTokenGenerator ? 'Приховати' : 'Додати девайс'}
      </Button>

      {showTokenGenerator && (
        <div style={{ marginTop: '1rem' }}>
          <TokenInput
            type="text"
            readOnly
            placeholder="Тут з’явиться токен"
            value={generatedToken}
          />
          <Button onClick={generateToken}>Згенерувати код</Button>
        </div>
      )}
    </PageWrapper>
  );
}