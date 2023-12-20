import * as React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/es'; // Importa el idioma español de Moment.js
import { useEventState } from './handleSelectSlot';
import  customStyles  from './customStyles';
moment.locale('es'); // Establece Moment.js en español
const localizer = momentLocalizer(moment);



const MyCalendar: React.FC = () => {
  // Aquí podrías obtener los eventos para mostrar en el calendario desde tu backend o localmente
  const { events, handleSelectSlot } = useEventState();
  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => console.log('Evento seleccionado:', event)}
        style={customStyles.calendarContainer} // Aplicar estilos al calendario
      />
    </div>
  );
};

export default MyCalendar;
