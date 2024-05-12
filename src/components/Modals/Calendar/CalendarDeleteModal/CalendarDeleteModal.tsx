import { MouseEventHandler } from "react";
import { MdCancel } from "react-icons/md";

import "./CalendarDeleteModal.scss";

interface IProps {
	handleDelete: MouseEventHandler<HTMLButtonElement>;
	handleClose: MouseEventHandler<HTMLButtonElement>;
}

const CalendarDeleteModal = ({ handleDelete, handleClose }: IProps) => {
	return (
		<div className="calendar__modal">
			<div className="calendar__shadow">
				<button
					onClick={handleClose}
					className="calendar__x"
				>
					<MdCancel className="calendar__x-icon" size={24} />
				</button>
				<div className="calendar__content">
					<h3 className="calendar__content-question">
						Are you sure you want to delete this event?
					</h3>
					<div className="calendar__content-answer">
						<button
							className="calendar__button-no"
							onClick={handleClose}
						>
							No, cancel
						</button>
						<button
							className="calendar__button-yes"
							onClick={handleDelete}
						>
							Yes, I'm sure
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalendarDeleteModal;