export const copyItems = (source: any, destination: any, columns: any) => {
	const column = columns[source.droppableId];
	const copiedItems = [...column.items];
	const [removed] = copiedItems.splice(source.index, 1);
	copiedItems.splice(destination.index, 0, removed);

	return {
		column,
		copiedItems,
	};
};