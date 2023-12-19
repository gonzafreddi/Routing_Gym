import { SlotInfo } from 'react-big-calendar'
import { useState } from 'react'


export type Event = {
    title:string,
    description?:string
    start:Date,
    end:Date
}


export const useEventState = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const newEvent = {
      title: 'hola',
      start: slotInfo.start,
      end: slotInfo.end,
    };
    setEvents([...events, newEvent]);
  };

  return {
    events,
    handleSelectSlot,
  };
};
