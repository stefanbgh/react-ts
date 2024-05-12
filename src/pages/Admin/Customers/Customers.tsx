import { FC, useEffect, useState } from 'react'

import { UserTable } from '../../../components'
import { QueryDocumentSnapshot, QuerySnapshot, getDocs } from 'firebase/firestore';
import { collectionRef, } from '../../../firebase/config';
import { IUser } from '../../../ts/interfaces/IUser/IUser';
import { tableSkeleton } from '../../../constants/skeletons/tableSkeleton';
import { Skeleton } from '@mui/material';
import { toast } from 'react-toastify';

const Employees: FC = (): JSX.Element => {
    const [ customers, setCustomers ] = useState<IUser[]>([]);

    useEffect(() => {
        getDocs(collectionRef)
            .then((snapshot: QuerySnapshot) => {
                snapshot.docs.forEach(() => {
                    const allCustomers: IUser[] = [];

                        snapshot.docs.forEach((doc: QueryDocumentSnapshot) => {
                            const singleCustomer = doc.data() as IUser;
                            const { token } = singleCustomer;
                        
                            if (token !== import.meta.env.VITE_ADMIN_TOKEN) {
                                allCustomers.push(singleCustomer);
                            }
                        });

                    setCustomers(allCustomers);
                });

            })
            .catch(error => {
                toast.error(error);
            })
    }, []);

    return (
        <>
			{
				customers.length > 0 ? (
					<UserTable
                        users={customers}
                    />
				) : (
					tableSkeleton.map((skeleton) => {
						const { skeletonId, skeletonHeight } = skeleton;
					
						return (
							<Skeleton 
								animation="wave"
								className='mb-1 last:mb-0'
								key={skeletonId} 
								variant="rectangular" 
								width="100%"
								height={skeletonHeight} 
							/>
						)
					})
				)
			}
		</>
    )
}

export default Employees