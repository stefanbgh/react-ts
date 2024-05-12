import { FC, useEffect, useState } from 'react'

import { UserTable } from '../../../components'
import { QueryDocumentSnapshot, QuerySnapshot, getDocs } from 'firebase/firestore';
import { collectionRef, } from '../../../firebase/config';
import { IUser } from '../../../ts/interfaces/IUser/IUser';
import { tableSkeleton } from '../../../constants/skeletons/tableSkeleton';
import { Skeleton } from '@mui/material';
import { toast } from 'react-toastify';

const Employees: FC = (): JSX.Element => {
    const [ employees, setEmployees ] = useState<IUser[]>([]);

    useEffect(() => {
        getDocs(collectionRef)
            .then((snapshot: QuerySnapshot) => {
                snapshot.docs.forEach(() => {
                    const allEmployees: IUser[] = [];

                        snapshot.docs.forEach((doc: QueryDocumentSnapshot) => {
                            const singleEmployee = doc.data() as IUser;
                            const { token } = singleEmployee;
                        
                            if (token === import.meta.env.VITE_ADMIN_TOKEN) {
                                allEmployees.push(singleEmployee);
                            }
                        });

                    setEmployees(allEmployees);
                });

            })
            .catch(error => {
                toast.error(error);
            })
    }, []);

    return (
        <>
			{
				employees.length > 0 ? (
					<UserTable
                        users={employees}
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