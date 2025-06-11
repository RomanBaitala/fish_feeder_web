import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1c2c39;
  padding: 20px;
  min-height: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const BackButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  color: #fff;
  background-color: #00bfa6;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #009e87;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #ffd700;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;
