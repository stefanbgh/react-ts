import { FC, useContext, Context, useEffect, useState } from 'react'

import { Banner, SupportInformation, SupportForm } from '../../components'
import { Container } from '../../containers'
import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ISupportInitialValues } from '../../ts/interfaces/ISupport/ISupportInitialValues';
import { toast } from 'react-toastify';
import { IUser } from '../../ts/interfaces/IUser/IUser';
import { supportInitialValues } from '../../constants/supportInitialValues';

const Support: FC = (): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
	const theme = darkTheme ? "dark" : "light";

    const [ initialValues, setInitialValues ] = useState<ISupportInitialValues>(supportInitialValues);

    useEffect(() => {
        if (userId) {
            const snapshot = onSnapshot(doc(db, "users", userId), (snapshot) => {
                const { firstName: supportFirstName, email: supportEmail } = snapshot.data() as IUser;
                setInitialValues({ supportFirstName, supportEmail, supportTitle: "", supportMessage: "" });

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
        <div>
            <Banner
                title="Support"
                desc="If you need help, send us a message!"
            />
            <Container>
                <div className='flex gap-6 justify-between py-6'>
                    <div className="w-2/6 h-full">
                        <SupportInformation/>
                    </div>
                    <div className="w-4/6 border border-gray-400 flex justify-center p-8">
                        <SupportForm 
                            theme={theme}
                            initialValues={initialValues}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Support