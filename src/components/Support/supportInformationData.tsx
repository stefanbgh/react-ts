import { AiFillPhone } from 'react-icons/ai';
import { MdEmail, MdLocationPin } from 'react-icons/md';

export const supportInformationData = [
    {
        infoId: 1,
        title: "Email",
        info: "electronexhelp@gmail.com",
        icon: <MdEmail color="red" size={24}/>
    },
    {
        infoId: 2,
        title: "Phone Number",
        info: "+381 60/100-10-10",
        icon: <AiFillPhone color="green" size={24}/>
    },
    {
        infoId: 3,
        title: "Office",
        info: "Unknown Street bb, Novi Sad, Serbia",
        icon: <MdLocationPin color="blue" size={24}/>
    },
]