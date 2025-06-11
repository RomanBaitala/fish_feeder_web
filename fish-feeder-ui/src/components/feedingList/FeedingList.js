import React from 'react';
import {
  ListWrapper,
  FeedingItem,
  EditBlock,
  Label,
  Input,
  Checkbox,
  Button,
  Title,
  SmallText,
  WeekdayWrapper,
  ListFl
} from './FeedingList.styled';

const allDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const dayMap = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function FeedingList({
  scheduleFeedings,
  editFeedingId,
  editedTime,
  editedEnabled,
  editedWeekdays,
  setEditFeedingId,
  setEditedTime,
  setEditedEnabled,
  setEditedWeekdays,
  startEditing,
  handleUpdateFeeding,
  handleDeleteFeeding,
}) {
  return (
    <ListWrapper>
      <Title>Усі таймери годування:</Title>
      {scheduleFeedings.length > 0 ? (
        <ul>
          {scheduleFeedings.map((schedule) => {
            const originalDate = new Date(schedule.time_to_feed);
            const utcDate = originalDate.toISOString().slice(0, 19).replace('T', ' ');

            return (
              <FeedingItem key={schedule.id}>
                {editFeedingId === schedule.id ? (
                  <EditBlock>
                    <Label>
                      Дата і час:
                      <Input
                        type="time"
                        autoComplete="off"
                        value={editedTime}
                        onChange={(e) => setEditedTime(e.target.value)}
                      />
                    </Label>
                    <Label>
                      Активне:
                      <Checkbox
                        type="checkbox"
                        checked={editedEnabled}
                        onChange={(e) => setEditedEnabled(e.target.checked)}
                      />
                    </Label>
                    <Label>Дні тижня:</Label>
                    <WeekdayWrapper>
                      {dayMap.map((day, idx) => (
                        <Label key={day}>
                          <Checkbox
                            type="checkbox"
                            checked={editedWeekdays.includes(day)}
                            onChange={() =>
                              setEditedWeekdays((prev) =>
                                prev.includes(day)
                                  ? prev.filter((d) => d !== day)
                                  : [...prev, day]
                              )
                            }
                          />
                          {allDays[idx]}
                        </Label>
                      ))}
                    </WeekdayWrapper>
                    <Button onClick={handleUpdateFeeding}>Зберегти</Button>
                    <Button onClick={() => setEditFeedingId(null)}>Скасувати</Button>
                  </EditBlock>
                ) : (
                  <EditBlock>
                    {utcDate} — {schedule.enabled ? "Активний" : "Вимкнений"}
                    <br />
                    <SmallText>
                      Дні: {schedule.weekdays?.length > 0 ? schedule.weekdays.join(", ") : "немає"}
                    </SmallText>
                    <br />
                    <ListFl>
                      <Button onClick={() => startEditing(schedule)}>Редагувати</Button>
                      <Button onClick={() => handleDeleteFeeding(schedule.id)}>Видалити</Button>
                    </ListFl>
                  </EditBlock>
                )}
              </FeedingItem>
            );
          })}
        </ul>
      ) : (
        <SmallText>Таймери годування відсутні</SmallText>
      )}
    </ListWrapper>
  );
}
