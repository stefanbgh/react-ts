import { IItems } from "./IItems";

export interface ITaskStatus {
	requested: IItems;
	toDo: IItems;
	inProgress: IItems;
	done: IItems;
}