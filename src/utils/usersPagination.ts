import { IUser } from "../ts/interfaces/IUser/IUser";

interface IUsersPagination {
    getVisibleUsers: IUser[];
    pageCount: number;
}

export const usersPagination: Function = (activePage: number, users: IUser[]): IUsersPagination => {
    const usersPerPage = 5;
    const usersVisible = activePage * usersPerPage;

    const getVisibleUsers: IUser[] = users.slice(
        usersVisible,
        usersVisible + usersPerPage
    );

    const pageCount = Math.ceil(users.length / usersPerPage);

    return {
        getVisibleUsers,
        pageCount
    }
}