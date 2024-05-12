import { FC } from "react";
 
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../../ts/interfaces/IDnd/ITask";

interface IProps {
	state: any;
	darkTheme: boolean;
}

const DndDraggable: FC<IProps> = ({ state, darkTheme }): JSX.Element => {
	return (
		<>
			{state.items.map((item: ITask, index: any) => {
				return (
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{(provided, snapshot) => {
							return (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									className={
										snapshot.isDragging
											? darkTheme 
												? "dnd__draggable_dark-active"
												: "dnd__draggable-active"
											: darkTheme
												? "dnd__draggable_dark"
												: "dnd__draggable"
									}
									style={{...provided.draggableProps.style }}
								>
									<h3 className={ darkTheme ? "dnd__draggable_content-dark" : "dnd__draggable_content" }>
										{item.content}
									</h3>
									<p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, nulla.</p>
								</div>
							);
						}}
					</Draggable>
				);
			})}
		</>
	);
};

export default DndDraggable;