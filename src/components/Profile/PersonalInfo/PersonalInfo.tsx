import { FC} from 'react'

import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser'
import { PersonalSingleInfo, PersonalSinceMember } from "../../../components"

const PersonalInfo: FC<IGetUser> = ({ firstName, lastName, email, username, sinceMember }): JSX.Element => {
    return (
        <div className='p-4 flex flex-col justify-between border border-gray-300'>
            <PersonalSingleInfo section='First Name' info={firstName}/>
            <PersonalSingleInfo section='Last Name' info={lastName}/>
            <PersonalSingleInfo section='Username' info={username}/>
            <PersonalSingleInfo section='Email' info={email}/>
            <PersonalSinceMember timestamp={sinceMember}/>
        </div>
    )
}

export default PersonalInfo