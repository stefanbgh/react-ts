import { RefObject } from "@fullcalendar/core/preact";
import { MouseEventHandler } from "react";
import { MdCancel } from "react-icons/md";

import "./CalendarAddModal.scss"

interface IProps {
    handleAdd: MouseEventHandler<HTMLButtonElement>;
    handleClose: MouseEventHandler<HTMLButtonElement>;
    inputRef: RefObject<HTMLInputElement>;
};

const CalendarAddModal = ({ handleAdd, handleClose, inputRef }: IProps) => {
    return (
        <div className="calendar__add__modal">
            <div className="calendar__add__shadow">
                <button onClick={handleClose} className="calendar__add__x">
                    <MdCancel className="calendar__add__x-icon" size={24} />
                </button>
                <h2 className="calendar__add__title">Enter a new title for your event</h2>
                <div>
                    <div>
                        <input 
                            className="calendar__add__input"
                            ref={inputRef} 
                            type="text" 
                            placeholder="..."
                        />
                    </div>
                    <div className="calendar__add__btn">
                        <button 
                            className="calendar__add__btn-btn"
                            onClick={handleAdd}
                        >
                            Set
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarAddModal