import { FC, useRef, FormEvent, useEffect, useState, Dispatch, SetStateAction } from 'react'

import { useUpdateYourAnswerForSupportMessageMutation } from '../../../features/API/supportMessagesAPI';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser';
import { toast } from 'react-toastify';

import "./AdminAnswerForm.scss"

interface IProps {
    messageId: number;
    firstName: string;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
    darkTheme: boolean;
}

const AdminAnswerForm: FC<IProps> = ({ messageId, firstName, setModalIsOpen, darkTheme }): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;

    const [ username, setUsername ] = useState<string>();
    const [ empty, setEmpty ] = useState<boolean>(false);

    const answerRef = useRef<HTMLTextAreaElement>(null);
    const [ updateYourAnswerForSupportMessage ] = useUpdateYourAnswerForSupportMessageMutation();

    const emptyAnswer = empty ? "admin-answer-form__container-content-empty" : "admin-answer-form__container-content";
    const theme = darkTheme ? "dark" : "light";

    const handleSendAnswer = (e: FormEvent<HTMLFormElement>, mId: number, userFirstName: string) => { 
        e.preventDefault();

        const adminMessage = answerRef.current?.value;
        const timestamp = new Date().getTime();

        if (adminMessage && username) {
            updateYourAnswerForSupportMessage({
                messageId: mId,
                answer: {
                    adminMessage,
                    adminMessageTimestamp: timestamp,
                    adminName: username
                },
                adminResponse: true,
                seen: false,
                changeTimestamp: timestamp
            });

            setModalIsOpen(false);
            setEmpty(false);
            toast.success(`You have successfully send answer for ${userFirstName}`, { theme });
            answerRef.current!.value = "";

            return;
        };

        setEmpty(true);
        answerRef.current!.value = "";
    };

    useEffect(() => {
        if (userId) {
            const snapshot = onSnapshot(doc(db, "users", userId), (snapshot) => {
                const { username } = snapshot.data() as IGetUser;
                setUsername(username);

            }, (error) => {
                toast.error(error.message);
            });

            return () => {
                snapshot();
            };
        };

        // eslint-disable-next-line
    }, [userId]);

    return (
        <form 
            className='admin-answer-form'
            onSubmit={(e) => handleSendAnswer(e, messageId, firstName)}
        >
            <div className='admin-answer-form__container'> 
                <h4>Your Answer:</h4>
                <textarea 
                    ref={answerRef}
                    className={emptyAnswer}
                    placeholder='Enter your answer...'
                >
                </textarea>
                { empty && <p className='admin-answer-form__container-warning'>Answer cannot be empty</p> }
            </div>
            <div className='admin-answer-form__container-button'>
                <button 
                    className={ 
                        darkTheme 
                            ? "admin-answer-form__container-button-send_dark" 
                            : "admin-answer-form__container-button-send" 
                    }
                >
                    Send
                </button>
            </div>
        </form>
    )
}

export default AdminAnswerForm