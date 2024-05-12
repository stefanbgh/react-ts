import { FC, useState, useRef } from "react";

import { IUser } from "../../../ts/interfaces/IUser/IUser";
import { UserTableHead, UserTableBody, AdminSearchUsers, Pagination, NothingFound, Spinner } from "../.."
import { PAGINATION_CHANGE_PAGE } from "../../../features/slices/paginationProductsSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../ts/types/RootState";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { usersPagination } from "../../../utils/usersPagination";

interface IProps {
	users: IUser[];
}

const UserTable: FC<IProps> = ({ users }): JSX.Element => {
	const { activePage } = useAppSelector((state: RootState) => state.pagination);

	const [ storedUsers, setStoredUsers ] = useState<IUser[]>(users); 
	const [ loading, setLoading ] = useState<boolean>(false); 

	const searchRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();

	const { getVisibleUsers: visibleUsers, pageCount } = usersPagination(activePage, storedUsers);

    const onPageChange = ({ selected }: { selected: number }) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(PAGINATION_CHANGE_PAGE({ pageNumber: selected }));
        }, 500);
    };

	return (
		<>
			<div className="mb-6 flex">
				<AdminSearchUsers
					searchRef={searchRef}
					storedUsers={users}
					setStoredUsers={setStoredUsers}
				/>
			</div>
			{
				visibleUsers.length > 0 ? (
					<>
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
								<UserTableHead/>
								<UserTableBody
									users={visibleUsers}
								/>
							</table>
						</div>
						<Pagination
							activePage={activePage}
							onPageChange={onPageChange}
							pageCount={pageCount}
						/>
					</>
				) : <div className="border"><NothingFound/></div>
			}
			{ loading && <Spinner/> }
		</>
	);
};

export default UserTable;
