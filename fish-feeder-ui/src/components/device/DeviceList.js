import { Wrapper, BackButton, Title, Paragraph } from './DeviceList.styled';

export default function DeviceInfo({ device, navigate }) {
  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← Назад</BackButton>
      <Title>Деталі девайса: {device.name}</Title>
      <Paragraph><b>ID:</b> {device.id}</Paragraph>
    </Wrapper>
  );
}
