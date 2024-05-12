import { FC, Fragment } from 'react'

import { Link } from 'react-router-dom'
import { IBannerNavigation } from '../../../ts/interfaces/IBanner/IBannerNavigation';

interface IProps {
    navigation: IBannerNavigation[];
}

const BannerNavigation: FC<IProps> = ({ navigation }): JSX.Element => {
    return (
        <div className='flex items-center gap-2'>
            {
                navigation.map((nav) => {
                    const { navigationName, route } = nav;

                    return (
                        <Fragment key={navigationName}>
                            {
                                route 
                                    ? <Link className='hover:text-blue-100 transition-all' to={route}>{navigationName} &rarr;</Link>
                                    : <p>{navigationName}</p>
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default BannerNavigation