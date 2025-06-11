import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthWrapper = styled.div`
  text-align: center;
  background-color: #1c2c39;
  width: 100%;
  min-height: 500px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #00bfa6;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #009e87;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #ffd700;
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled(Link)`
  font-size: 1.2em;
  color: #00bfa6;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
