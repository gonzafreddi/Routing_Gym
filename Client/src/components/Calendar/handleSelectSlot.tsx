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
    const title = prompt('ingrese el titulo del dia')
    if(title){
        const newEvent = {
            title: title,
            start: slotInfo.start,
            end: slotInfo.end,
          };
          setEvents([...events, newEvent]);
    }
  };

  return {
    events,
    handleSelectSlot,
  };
};
