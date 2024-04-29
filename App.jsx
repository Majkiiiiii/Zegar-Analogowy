import { useState, useEffect } from 'react';
import "./App.css";
import Zegar from './Zegar';

function App() {
  const [time, setTime] = useState(new Date());
  const [hours, setHours] = useState(((time.getHours() + (time.getMinutes() / 60)) / 12) * 360);
  const [minutes, setMinutes] = useState(((time.getMinutes() + (time.getSeconds() / 60))/ 60) * 360);
  const [seconds, setSeconds] = useState((time.getSeconds() + (time.getMilliseconds() / 1000)) / 60 * 360);
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isCustomTime, setIsCustomTime] = useState(false);
  const [timeOffset, setTimeOffset] = useState(0);

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      let offsetTime = currentTime;
      if (isCustomTime) {
        offsetTime = new Date(currentTime.getTime() + timeOffset);
      }
      setHours((offsetTime.getHours() + (offsetTime.getMinutes() / 60)) / 12 * 360);
      setMinutes((offsetTime.getMinutes() + (offsetTime.getSeconds() / 60))/ 60 * 360);
      setSeconds((offsetTime.getSeconds() + (offsetTime.getMilliseconds() / 1000)) / 60 * 360);
    }, 10);

    return () => clearInterval(interval);
  }, [isCustomTime, timeOffset]);

  const handleTimeChange = () => {
    setIsCustomTime(!isCustomTime);
    if (!isCustomTime) {
      const newTime = new Date();
      newTime.setHours(parseInt(inputHours, 10));
      newTime.setMinutes(parseInt(inputMinutes, 10));
      newTime.setSeconds(parseInt(inputSeconds, 10));
      const currentTime = new Date();
      const offset = newTime.getTime() - currentTime.getTime();
      setTimeOffset(offset);
    } else {
      setTimeOffset(0);
    }
  };

  return (
    <>
      <Zegar hours={hours} minutes={minutes} seconds={seconds} />
      <br />
      <label>Godzina:</label>
      <input type="text" name="hours" value={inputHours} onChange={(e) => setInputHours(e.target.value)} />
      <br />
      <label>Minuta:</label>
      <input type="text" name="minutes" value={inputMinutes} onChange={(e) => setInputMinutes(e.target.value)} />
      <br />
      <label>Sekunda:</label>
      <input type="text" name="seconds" value={inputSeconds} onChange={(e) => setInputSeconds(e.target.value)} />
      <br />
      <input type="button" name="submit" value={isCustomTime ? "Wróć do systemowego" : "Przejdź na ręczny czas"} onClick={handleTimeChange} />
    </>
  );
}
export default App;