import { IUser } from "../../ts/interfaces/IUser/IUser";

export const searchUsers = (storedEmployees: IUser[], args: string) => {
    const search = storedEmployees.filter((singleEmployee: IUser) => {
        return singleEmployee.firstName.toLowerCase().indexOf(args.toLowerCase()) !== -1;
    });

    return search;
}