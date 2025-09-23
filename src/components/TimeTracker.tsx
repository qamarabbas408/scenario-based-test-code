import React, { useState, useCallback } from 'react';

interface TimeEvent {
  type: 'Clock In'; //add other

}

const TimeTracker: React.FC = () => {
  const [isClockedIn, setIsClockedIn] = useState<boolean>(false);
  const [isOnBreak, setIsOnBreak] = useState<boolean>(false);
  const [events, setEvents] = useState<TimeEvent[]>([]);
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [breakStartTime, setBreakStartTime] = useState<Date | null>(null);
 
 const addEvent = useCallback((type: TimeEvent['type']) => {
  
  }, []);

 
  const handleClockIn = useCallback(() => {

  }, []);

  const handleClockOut = useCallback(() => {
  
  }, []);

  const handleStartBreak = useCallback(() => {

  }, []);

  const handleEndBreak = useCallback(() => {
  
  }, []);


  return (
    <div style={{ padding: '20px' }}>
      <h1>Time Tracker (Boilerplate)</h1>
      <p>Current Status: {status}</p>
      <div style={{ marginBottom: '20px' }}>
        <button style={{ marginRight: '10px' }}>Clock In</button>
        <button style={{ marginRight: '10px' }}>Clock Out</button>
        <button style={{ marginRight: '10px' }}>Start Break</button>
        <button>End Break</button>
      </div>
      <h2>History:</h2>
        {/* Listing */}
    </div>
  );
};

export default TimeTracker;
