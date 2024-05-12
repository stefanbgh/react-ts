import { FC, useState } from 'react'

import { Banner, MessageContainer, MessagesSidebar, Spinner } from '../../components'
import Container from '../../containers/Container/Container'
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../ts/types/RootState';
import { useGetMyMessagesForSupportQuery } from '../../features/API/supportMessagesAPI';

const Messages: FC = (): JSX.Element => {
	const userId = localStorage.getItem("userId") as string;
	useGetMyMessagesForSupportQuery(userId);

    const { myMessagesForSupport } = useAppSelector((state: RootState) => state.support_messages);
	const [ activeMessage, setActiveMessage ] = useState<number>(0);

  	return (
    	<div>
			<Banner
				title='Messages'
			/>
			<Container>
				<div className='py-6'>
					<div className='flex gap-6'>
						{
							myMessagesForSupport ? (
								<>
									<MessagesSidebar 
										setActiveMessage={setActiveMessage}
										activeMessage={activeMessage}
										myMessagesForSupport={myMessagesForSupport}
									/>
									<MessageContainer 
										myMessagesForSupport={myMessagesForSupport}
										activeMessage={activeMessage}
									/>
								</>
							) : <div className='h-[350px]'><Spinner/></div>
						}
					</div>
				</div>
			</Container>
		</div>
  	)
}

export default Messages