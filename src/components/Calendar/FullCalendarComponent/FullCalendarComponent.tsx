import {
	DateSelectArg,
	EventClickArg,
} from "@fullcalendar/core";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

interface IProps {
    handleDateSelect: (arg: DateSelectArg) => void;
    handleEventClick: (arg: EventClickArg) => void;
}

const FullCalendarComponent = ({ handleDateSelect, handleEventClick }: IProps) => {
    return (
        <div className="fullcalendar">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateSelect}
                eventClick={handleEventClick}
                eventColor="#f00"
            />
        </div>
  )
}

export default FullCalendarComponent