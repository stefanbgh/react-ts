interface IUserTableHead {
    id: number;
    text: string;
    cN: string; // tailwind className
}

export const userTableHeadData: IUserTableHead[] = [
    {
        id: 1,
        text: "First Name",
        cN: "px-6 py-3"
    },
    {
        id: 2,
        text: "Last Name",
        cN: "px-6 py-3"
    },
    {
        id: 3,
        text: "Email",
        cN: "px-12 py-3"
    },
    {
        id: 4,
        text: "Username",
        cN: "px-6 py-3"
    },
    {
        id: 5,
        text: "Role",
        cN: "px-6 py-3"
    },
    {
        id: 6,
        text: "Action",
        cN: "px-6 py-3"
    },
]