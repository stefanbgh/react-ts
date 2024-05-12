import {
	DateSelectArg,
	EventClickArg,
} from "@fullcalendar/core";

import "./CalendarComponent.scss"
import { Modal } from "@mui/material";
import { useRef, useState } from "react";
import { CalendarAddModal, CalendarDeleteModal, FullCalendarComponent } from "../../../components";

const CalendarComponent = () => {
	const [ deleteModalActive, setDeleteModalActive] = useState<boolean>(false);
	const [ addModalActive, setAddModalActive] = useState<boolean>(false);
	const [ deleteModalInfo, setDeleteModalInfo ] = useState<EventClickArg>();
	const [ addModalInfo, setAddModalInfo ] = useState<DateSelectArg>();

	const inputRef = useRef<HTMLInputElement>(null);

	// delete event
	const handleEventClick = (clickInfo: EventClickArg) => {
		setDeleteModalActive(true);
		setDeleteModalInfo(clickInfo);
	};

	const handleDelete = (clickInfo: EventClickArg) => {
		clickInfo.event.remove();
		setDeleteModalActive(false);
	};

	// add event
	const handleDateSelect = (selectInfo: DateSelectArg) => {
		setAddModalActive(true);
		setAddModalInfo(selectInfo);
	};

	const handleAdd = (selectInfo: DateSelectArg) => {
		const inputValue = inputRef.current?.value;
		const calendarApi = selectInfo.view.calendar;

		calendarApi.unselect();

		if (inputValue) {
			calendarApi.addEvent({
				title: inputValue,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}

		setAddModalActive(false);
	};

	// close modals
	const handleCloseDeleteModal = () => setDeleteModalActive(false);
	const handleCloseAddModal = () => setAddModalActive(false);

	return (
		<div className="calendar">
			<FullCalendarComponent
				handleDateSelect={handleDateSelect}
				handleEventClick={handleEventClick}
			/>
			<Modal open={deleteModalActive} onClose={handleCloseDeleteModal} className='bg-white bg-opacity-80'>
				<CalendarDeleteModal
					handleClose={handleCloseDeleteModal}
					handleDelete={() => handleDelete(deleteModalInfo!)}
				/>
			</Modal>
			<Modal open={addModalActive} onClose={handleCloseAddModal} className='bg-white bg-opacity-80'>
				<CalendarAddModal
					inputRef={inputRef}
					handleClose={handleCloseAddModal}
					handleAdd={() => handleAdd(addModalInfo!)}
				/>
			</Modal>
		</div>
	);
};

export default CalendarComponent;