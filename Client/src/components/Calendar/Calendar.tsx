import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es'; // Importa el idioma español de Moment.js

moment.locale('es'); // Establece Moment.js en español

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  // Aquí podrías obtener los eventos para mostrar en el calendario desde tu backend o localmente
  const events = [
    {
      title: 'Piernas',
      start: new Date(2023, 11, 15),
      end: new Date(2023, 11, 15),
    },
    // Agrega más eventos si es necesario
  ];

  const customStyles = {
    calendarContainer: {
      width: '800px', // Ancho personalizado del calendario
      borderRadius: '10px', // Esquinas redondeadas
    },
  };

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={customStyles.calendarContainer} // Aplicar estilos al calendario
      />
    </div>
  );
};

export default MyCalendar;
