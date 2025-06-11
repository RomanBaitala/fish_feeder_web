import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #1c2c39;
  min-height: 100vh;
  padding: 30px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #ffd700;
  margin: 0;
`;

export const TopBar = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const DeviceList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const DeviceItem = styled.li`
  padding: 10px 15px;
  background-color: #263b4d;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #00bfa6;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34556b;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  background-color: #00bfa6
`

export const TokenInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #00bfa6;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  background-color: #2c1c1c;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;
