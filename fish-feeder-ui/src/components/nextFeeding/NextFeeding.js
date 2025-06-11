import { Wrapper, Title, Text } from './NextFeeding.styled';

export default function NextFeeding({ nextFeeding }) {
  return (
    <Wrapper>
      <Title>Наступне годування:</Title>
      {nextFeeding ? (
        <Text>{new Date(nextFeeding.time_to_feed).toUTCString().slice(0, 19)}</Text>
      ) : (
        <Text>Наступне годування не заплановано</Text>
      )}
    </Wrapper>
  );
}