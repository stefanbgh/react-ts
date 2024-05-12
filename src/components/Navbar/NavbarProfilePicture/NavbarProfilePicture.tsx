import React, { FC, MouseEventHandler, useContext, Context } from 'react'

import { BsCamera } from 'react-icons/bs';

import { storage } from '../../../firebase/config';
import { ref, listAll, getDownloadURL, ListResult, StorageReference } from 'firebase/storage';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';

interface IProps {
    handleDisplayProfileDropdown?: MouseEventHandler<HTMLDivElement>;
}

const NavbarProfilePicture: FC<IProps> = ({ handleDisplayProfileDropdown }): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;
    const { pictureURL } = useAppSelector((state: RootState) => state.profile_picture);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const [ profilePicture, setProfilePicture ] = React.useState<string>();

    React.useEffect(() => {
        const imageRef: StorageReference = ref(storage, `${userId}/`);

        listAll(imageRef)
            .then((res: ListResult) => {
                res.items.forEach((item: StorageReference) => {
                    getDownloadURL(item)
                        .then((url: string) => setProfilePicture(url))
                })
            })
        // eslint-disable-next-line
    }, [pictureURL]);

    return (
        <div 
            onMouseEnter={handleDisplayProfileDropdown}
            className="w-[40px] h-[40px] cursor-pointer border border-gray-600 rounded-full relative flex items-center justify-center overflow-hidden"
        >
            {
                !profilePicture ? (
                    <div className={`
                        ${ darkTheme ? "bg-gray-900" : "bg-white" }
                        w-[100px] h-[100px] rounded-full text-center flex flex-col items-center justify-center
                    `}>
                        <BsCamera size={16} className='text-blue-500'/>
                    </div>
                ) : <img width={50} src={profilePicture} alt='img' loading="lazy"/>
            }
        </div>
    )
}

export default NavbarProfilePicture