import { Routes } from "../../router/Routes";

import { VscAccount } from "react-icons/vsc";
import { BsBookmarkCheck, BsBag } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export const profileData = [
    {
        id: 1, 
        route: Routes.PROFILE,
        text: "Profile",
        icon: <VscAccount/>
    },
    {
        id: 2, 
        route: `${Routes.PROFILE}${Routes.WISHLIST}`,
        text: "Wishlist",
        icon: <BsBookmarkCheck/>
    },
    {
        id: 3, 
        route: `${Routes.PROFILE}${Routes.ORDERS}`,
        text: "Orders",
        icon: <BsBag/>
    },
    {
        id: 4, 
        route: `${Routes.PROFILE}${Routes.SETTINGS}`,
        text: "Settings",
        icon: <CiSettings/>
    },
];  