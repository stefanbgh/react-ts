import { Droppable } from "react-beautiful-dnd";
import DndDraggable from "./DndDraggable";
import { ITask } from "../../ts/interfaces/IDnd/ITask";

const DndDroppable = ({
	state,
	droppableId,
	columnId,
	darkTheme
}: {
	state: ITask;
	droppableId: string;
	columnId: string;
	darkTheme: boolean;
}) => {
	return (
		<Droppable droppableId={droppableId} key={columnId}>
			{(provided, snapshot) => {
				return (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className={
							snapshot.isDraggingOver
								? darkTheme 
									? "dnd__droppable_dark-active"
									: "dnd__droppable-active"
								: darkTheme
									? "dnd__droppable_dark"
									: "dnd__droppable"
						}
					>
						<DndDraggable state={state} darkTheme={darkTheme}/>
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};

export default DndDroppable;