import { FC} from 'react'

import { supportInformationData } from '../supportInformationData'
import { SupportSingleInformation } from "../../../components"

const SupportInformation: FC = (): JSX.Element => {
    return (
        <div className='flex flex-col gap-6'>
            {
                supportInformationData.map((information) => {
                    const { infoId, title, info, icon } = information;

                    return (
                        <SupportSingleInformation
                            key={infoId}
                            icon={icon}
                            title={title}
                            info={info}
                        />  
                    )
                })
            }
        </div>
    )
}

export default SupportInformation