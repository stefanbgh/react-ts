import { FC, useState, useContext, Context } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import { taskStatus } from "./data/taskStatus";
import DndDroppable from "./DndDroppable";
import { onDragEnd } from "../../utils/helpers/onDragAnd";
import DarkThemeContext from "../../context/ThemeContext";
import { IDarkThemeContext } from "../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

import "./Dnd.scss"

const Dnd: FC = (): JSX.Element => {
	const [columns, setColumns] = useState(taskStatus);
	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

	return (
		<div>
			<div
                className="flex justify-center h-full"
			>
				<DragDropContext
					onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
				>
					{Object.entries(columns).map(([columnId, column]) => {
						return (
							<div
                                className="flex flex-col items-center"
								key={columnId}
							>
								<h2>{column.name}</h2>
								<div className="m-2">
									<DndDroppable
										state={column}
										droppableId={columnId}
										columnId={columnId}
										darkTheme={darkTheme}
									/>
								</div>
							</div>
						);
					})}
				</DragDropContext>
			</div>
		</div>
	);
}

export default Dnd;