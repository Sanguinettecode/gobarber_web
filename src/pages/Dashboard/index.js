import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';
import api from '../../services/api';
import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);
  const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const formatedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadScadule() {
      const response = await api.get('/schedule', {
        params: { date },
      });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });
      setSchedule(data);
    }
    loadScadule();
  }, [date, range]);

  function handerPrevDay() {
    setDate(subDays(date, 1));
  }
  function handerNextDay() {
    setDate(addDays(date, 1));
  }
  api.get('/appointment');
  return (
    <Container>
      <header>
        <button type="button" onClick={handerPrevDay}>
          <MdChevronLeft size={32} color="#fff" />
        </button>
        <strong>{formatedDate}</strong>
        <button type="button" onClick={handerNextDay}>
          <MdChevronRight size={32} color="#fff" />
        </button>
      </header>
      <ul>
        {schedule.map(sched => (
          <Time
            key={sched.time}
            past={sched.past}
            available={!sched.appointment}
          >
            <strong>{sched.time}</strong>
            <span>
              {sched.appointment ? sched.appointment.user.name : 'Em Aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
