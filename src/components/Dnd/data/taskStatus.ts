import { ITaskStatus } from "../../../ts/interfaces/IDnd/ITaskStatus";
import { tasks } from "./tasks";

export const taskStatus: ITaskStatus = {
	requested: {
		name: "Requested",
		items: tasks,
	},
	toDo: {
		name: "To do",
		items: [],
	},
	inProgress: {
		name: "In Progress",
		items: [],
	},
	done: {
		name: "Done",
		items: [],
	},
};