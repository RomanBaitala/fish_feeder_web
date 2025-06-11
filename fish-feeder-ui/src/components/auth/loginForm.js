import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  AuthWrapper,
  Form,
  Input,
  Button,
  Title,
  Text
} from './auth.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
      });

      localStorage.setItem('access_token', response.data.access_token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Помилка входу');
    }
  };

  return (
    <AuthWrapper>
      <Form onSubmit={handleLogin}>
        <Title>Вхід</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Увійти</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Text to="/register">Ще не маєш акаунту? Зареєструйся</Text>
      </Form>
    </AuthWrapper>
  );
}
