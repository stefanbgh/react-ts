export const changeItems = (source: any, destination: any, columns: any) => {
	const sourceColumn = columns[source.droppableId];
	const destColumn = columns[destination.droppableId];
	const sourceItems = [...sourceColumn.items];
	const destItems = [...destColumn.items];
	const [removed] = sourceItems.splice(source.index, 1);
	destItems.splice(destination.index, 0, removed);

	return {
		sourceColumn,
		sourceItems,
		destColumn,
		destItems,
	};
};