import {
  FormWrapper,
  FormTitle,
  Label,
  Input,
  Checkbox,
  Button,
  WeekdayWrapper,
} from './FeedingForm.styled';

const allDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const dayMap = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function FeedingForm({
  newFeedingTime,
  setNewFeedingTime,
  newFeedingEnabled,
  setNewFeedingEnabled,
  newFeedingWeekdays,
  setNewFeedingWeekdays,
  handleAddFeeding,
  loading
}) {
  const toggleWeekday = (day) => {
    setNewFeedingWeekdays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  return (
    <FormWrapper>
      <FormTitle>Додати нове годування:</FormTitle>
      <form onSubmit={handleAddFeeding}>
        <Label>
          Дата і час:
          <Input
            type="time"
            value={newFeedingTime}
            onChange={(e) => setNewFeedingTime(e.target.value)}
            required
          />
        </Label>
        <Label>
          Активне:
          <Checkbox
            type="checkbox"
            checked={newFeedingEnabled}
            onChange={(e) => setNewFeedingEnabled(e.target.checked)}
          />
        </Label>
        <Label>Дні тижня:</Label>
        <WeekdayWrapper>
          {dayMap.map((day, idx) => (
            <Label key={day}>
              <Checkbox
                type="checkbox"
                checked={newFeedingWeekdays.includes(day)}
                onChange={() => toggleWeekday(day)}
              />
              {allDays[idx]}
            </Label>
          ))}
        </WeekdayWrapper>
        <Button type="submit" disabled={loading}>
          {loading ? "Додаємо..." : "Додати годування"}
        </Button>
      </form>
    </FormWrapper>
  );
}
