import { changeItems } from "./changeItems";
import { copyItems } from "./copyItems";

export const onDragEnd = (result: any, columns: any, setColumns: any) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const items = changeItems(source, destination, columns);
		setColumns({
			...columns,
			[source.droppableId]: {
				...items["sourceColumn"],
				items: items["sourceItems"],
			},
			[destination.droppableId]: {
				...items["destColumn"],
				items: items["destItems"],
			},
		});

		return;
	}

	const items = copyItems(source, destination, columns);
	setColumns({
		...columns,
		[source.droppableId]: {
			...items["column"],
			items: items["copiedItems"],
		},
	});
};