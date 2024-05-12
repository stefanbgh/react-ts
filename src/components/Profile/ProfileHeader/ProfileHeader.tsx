import { FC, useEffect, useState, useContext, Context } from "react";

import { OpenDashboard, ProfilePicture } from "../../../components"
import { IGetUser } from "../../../ts/interfaces/IUser/IGetUser";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { toast } from "react-toastify";
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

const ProfileHeader: FC = (): JSX.Element => {
	const userId = localStorage.getItem("userId") as string;
	const [ user, setUser ] = useState<IGetUser>();

	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
	const theme = darkTheme ? "dark" : "light";

	useEffect(() => {
        if (userId) {
            const snapshot = onSnapshot(doc(db, "users", userId), (snapshot) => {
                const userData = snapshot.data() as IGetUser;
                setUser(userData);

            }, (error) => {
                toast.error(error.message, { theme });
            });

            return () => {
                snapshot();
            };
        };

        // eslint-disable-next-line
    }, [userId]);

	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<ProfilePicture/>
				<div className="ml-2">
					<p className="text-gray-400 text-sm">@{user?.username ? user.username : "/"}</p>
					{
						user?.firstName && user?.lastName 
							? <p>{user.firstName} {user.lastName}</p>
							: <p>/</p>
					}
				</div>
			</div>
			<OpenDashboard/>
		</div>
	);
};

export default ProfileHeader;
