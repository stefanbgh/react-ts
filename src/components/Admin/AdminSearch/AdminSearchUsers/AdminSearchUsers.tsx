import { FC, RefObject, Dispatch, SetStateAction, useEffect } from "react"

import { debounce } from 'throttle-debounce';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../../features/slices/paginationProductsSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IUser } from "../../../../ts/interfaces/IUser/IUser";
import { searchUsers } from "../../../../utils/helpers/searchUsers";

interface IProps {
    searchRef: RefObject<HTMLInputElement>
    storedUsers: IUser[];
    setStoredUsers: Dispatch<SetStateAction<IUser[]>>;
}

const AdminSearch: FC<IProps> = ({ storedUsers, setStoredUsers, searchRef }): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        setStoredUsers(storedUsers);
        searchRef.current!.value = "";

        // eslint-disable-next-line
    }, [storedUsers, searchRef]);

    const debounceFunc = debounce(1000, (args: string) => {
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());

        if (args === "") {
            setStoredUsers(storedUsers);

            return;
        }

        const search = searchUsers(storedUsers, args);
        setStoredUsers(search);
    });

    const handleSearchProducts = () => debounceFunc(searchRef.current!.value);

    return (
        <div className='border border-gray-300 flex items-center py-2 px-3 gap-1'>
            <input 
                className='outline-none bg-transparent'
                type="text" 
                placeholder='Search by name'
                ref={searchRef}
                onChange={handleSearchProducts}
            />
            <div>
                <BiSearchAlt2
                    size={20}
                    className='text-gray-400'
                />
            </div>
        </div>
    )
}

export default AdminSearch;