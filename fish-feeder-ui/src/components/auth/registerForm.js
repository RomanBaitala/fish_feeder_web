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

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('http://localhost:5000/user/register', {
        name,
        email,
        password,
      });

      alert('Реєстрація пройшла успішно');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Помилка реєстрації');
    }
  };

  return (
    <AuthWrapper>
      <Form onSubmit={handleRegister}>
        <Title>Реєстрація</Title>

        <Input
          type="text"
          placeholder="Ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Зареєструватися</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Text to="/login">Вже маєш акаунт? Увійди</Text>
      </Form>
    </AuthWrapper>
  );
}
