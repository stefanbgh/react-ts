import { FC, useState, useEffect, useContext, Context } from 'react'

import { BsCamera } from "react-icons/bs";

import { storage } from '../../../firebase/config';
import { ref, uploadBytes, listAll, getDownloadURL, ListResult, StorageReference, UploadResult } from 'firebase/storage';
import { toast } from 'react-toastify';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { CHANGE_PROFILE_PICTURE } from '../../../features/slices/profilePictureSlice';

const ProfilePicture: FC = (): JSX.Element => {
    const userId = localStorage.getItem("userId");

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const [ profilePicture, setProfilePicture ] = useState<string>();

    const theme = darkTheme ? "dark" : "light";

    const dispatch = useAppDispatch();

    useEffect(() => {
        const imageRef: StorageReference = ref(storage, `${userId}/`);

        listAll(imageRef)
            .then((res: ListResult) => {
                res.items.forEach((item: StorageReference) => {
                    getDownloadURL(item)
                        .then((url: string) => setProfilePicture(url))
                })
            })
        // eslint-disable-next-line
    }, []);

    const handleChangeProfilePicture = (e: React.ChangeEvent<HTMLInputElement> & { target: EventTarget & { files: FileList } }) => {
        const uploadedImage: File = e.target.files[0];
        
        if (!uploadedImage) {
            toast.error("Something went wrong. Try again", { theme });

            return;
        };

        const imageRef: StorageReference = ref(storage, `${userId}/profile-picture`);

        uploadBytes(imageRef, uploadedImage)
            .then((snapshot: UploadResult) => getDownloadURL(snapshot.ref))
            .then((url: string) => {
                setProfilePicture(url);
                dispatch(CHANGE_PROFILE_PICTURE(url));
                toast.success("You have successfully changed your profile picture", { theme });
            })
            .catch((error) => toast.error(error, { theme }));
    };

    return (
        <div className="w-[100px] h-[100px] rounded-full border border-gray-700 relative z-10 bg-white -top-8 flex items-center justify-center overflow-hidden">
            <label htmlFor="profile-picture">
                {
                    !profilePicture ? (
                        <div className='bg-white w-[100px] h-[100px] rounded-full text-center flex flex-col items-center justify-center'>
                            <BsCamera size={24} className='text-blue-500'/>
                        </div>
                    ) : <img width={100} src={profilePicture} alt='img' loading="lazy"/>
                }
                <input 
                    id='profile-picture' 
                    type='file' 
                    className='hidden'
                    onChange={handleChangeProfilePicture}
                />
            </label>
        </div>
    )
}

export default ProfilePicture