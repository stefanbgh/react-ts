import { BsCart3, BsChatSquareDots, BsInbox } from "react-icons/bs";
import { Routes } from "../../router/Routes";
import { ISectionsData } from "../../ts/interfaces/ISections/ISectionsData";

export const sectionsData: ISectionsData[] = [
    {
        sectionId: 1,
        sectionName: "chat",
        route: Routes.CHAT,
        icon: <BsChatSquareDots size={20} color="gray"/>
    },
    {
        sectionId: 2,
        sectionName: "messages",
        route: Routes.MESSAGES,
        icon: <BsInbox size={20} color="gray"/>
    },
    {
        sectionId: 3,
        sectionName: "cart",
        icon: <BsCart3 size={20} color="gray" />
    },
]