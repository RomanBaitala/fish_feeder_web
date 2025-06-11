import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: #1c2c39;
  padding: 20px;
  border:rgba(91, 148, 75, 0.55) solid 2px;
  width: 50%;
  text-align: center;
  color: white;
`;

export const FormTitle = styled.h3`
  font-size: 1.6rem;
  color: #ffd700;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #ffd700;
`;

export const Input = styled.input`
  margin-left: 10px;
  padding: 6px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Checkbox = styled.input`
  margin-right: 6px;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #00bfa6;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #009e87;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

export const WeekdayWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
`;
