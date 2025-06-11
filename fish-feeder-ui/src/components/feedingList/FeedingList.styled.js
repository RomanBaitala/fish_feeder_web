import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: #1c2c39;
  padding: 20px;
  color: white;
  width: 50%;
  border:rgba(91, 148, 75, 0.55) solid 2px;
  text-align: center;
`;

export const ListFl = styled.ul`
  margin: 0 auto;
  padding: 0;
  gap: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const FeedingItem = styled.li`
  margin-bottom: 1.5em;
  list-style: none;
  border-bottom: 1px solid #333;
  padding-bottom: 1em;
`;

export const EditBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
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
  padding: 8px;
  font-size: 1rem;
  color: #fff;
  background-color: #00bfa6;
  border: none;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: #009e87;
  }
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: #ffd700;
  margin-bottom: 20px;
`;

export const SmallText = styled.p`
  font-size: 1rem;
  color: #00bfa6;
`;

export const WeekdayWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
