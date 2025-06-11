import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c2c39;
  padding: 20px;
  color: #f0f0f0;
  text-align: center;
  width: 50%;
  border:rgba(91, 148, 75, 0.55) solid 2px;`;

export const Title = styled.h3`
  color: #ffd700;
  margin-bottom: 15px;
  text-align: center;
`;

export const LogList = styled.ul`
  list-style: none;
  padding-left: 0;
  max-height: 300px;
  max-width: 300px;
  margin: 0 auto;
  overflow-y: auto;
  border-top: 1px solid #00bfa6;
`;

export const LogItem = styled.li`
  padding: 8px 10px;
  border-bottom: 1px solid #00bfa6;
  font-size: 0.9rem;
  color: ${({ success }) => (success ? "#00bfa6" : "#ff4c4c")};
`;

export const ErrorText = styled.p`
  color: #ff4c4c;
  text-align: center;
`;