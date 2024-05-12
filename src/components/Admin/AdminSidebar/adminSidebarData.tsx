import { MdQueryStats } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { LiaUsersSolid } from "react-icons/lia";
import { IoPeopleOutline } from "react-icons/io5";
import { BsKanban, BsBag, BsInbox } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { PiArticle } from "react-icons/pi";

import { Routes } from "../../../router/Routes";

export const adminSidebarData = [
    {
        id: 1,
        icon: <MdQueryStats/>,
        title: "Dashboard",
        route: Routes.DASHBOARD
    },
    {
        id: 2,
        icon: <BsKanban/>,
        title: "Kanban",
        route: `${Routes.DASHBOARD}${Routes.KANBAN}`
    },
    {
        id: 3,
        icon: <AiOutlineCalendar/>,
        title: "Calendar",
        route: `${Routes.DASHBOARD}${Routes.CALENDAR}`
    },
    {
        id: 4,
        icon: <IoPeopleOutline/>,
        title: "Employees",
        route: `${Routes.DASHBOARD}${Routes.EMPLOYEES}`
    },
    {
        id: 5,
        icon: <LiaUsersSolid/>,
        title: "Customers",
        route: `${Routes.DASHBOARD}${Routes.CUSTOMERS}`
    },
    {
        id: 6,
        icon: <BsInbox/>,
        title: "Messages",
        route: `${Routes.DASHBOARD}${Routes.ADMIN_MESSAGES}`
    },
    {
        id: 7,
        icon: <PiArticle/>,
        title: "Products",
        route: `${Routes.DASHBOARD}${Routes.ADMIN_PRODUCTS}`
    },
    {
        id: 8,
        icon: <BsBag/>,
        title: "Orders",
        route: `${Routes.DASHBOARD}${Routes.ADMIN_ORDERS}`
    },
    {
        id: 9,
        icon: <VscPreview/>,
        title: "Reviews",
        route: `${Routes.DASHBOARD}${Routes.ADMIN_REVIEWS}`
    },
]