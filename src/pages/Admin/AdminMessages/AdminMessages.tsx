import { Context, FC, useContext, useState } from "react";

import { useGetAllMessagesForSupportQuery } from "../../../features/API/supportMessagesAPI";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../ts/types/RootState";
import { AdminMessagesTitle, AdminSingleMessage, Spinner } from "../../../components";
import { ISupportMessage } from "../../../ts/interfaces/ISupport/ISupportMessage";

import "./AdminMessages.scss";
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

const AdminMessages: FC = (): JSX.Element => {
    useGetAllMessagesForSupportQuery();
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const { allMessagesForSupport } = useAppSelector((state: RootState) => state.support_messages);
    const [ numberOfVisibleMessages, setNumberOfVisibleMessages ] = useState<number>(5);

    const visibleMessagesForSupport = allMessagesForSupport.slice(0, numberOfVisibleMessages);

    const handleLoadMore = () => setNumberOfVisibleMessages((novm) => novm + 5);

	return (
		<>
            {
                visibleMessagesForSupport.length > 0 ? (
                    <>
                        <AdminMessagesTitle
                            darkTheme={darkTheme}
                        />
                        {
                            visibleMessagesForSupport.map((supportMessage: ISupportMessage) => {
                                const { messageId, email, message, timestamp, adminResponse } = supportMessage;

                                return (
                                    <AdminSingleMessage
                                        key={messageId}
                                        messageId={messageId}
                                        email={email}
                                        message={message}
                                        timestamp={timestamp}
                                        adminResponse={adminResponse}
                                    />
                                )
                            })
                        }
                        {
                            numberOfVisibleMessages < allMessagesForSupport.length && (
                                <div className="admin__messages-load-more">
                                    <button 
                                        onClick={handleLoadMore}
                                        className={
                                            darkTheme
                                            ? "admin__messages-load-more-button__dark"
                                            : "admin__messages-load-more-button"
                                        }
                                    >
                                        Load more
                                    </button>
                                </div>
                            )
                        }
                    </>
                ) : <Spinner/>
            }
		</>
	);
};

export default AdminMessages;
