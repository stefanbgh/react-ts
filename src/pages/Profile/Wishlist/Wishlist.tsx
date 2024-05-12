import { FC, useState, useEffect } from 'react'

import { WishlistEmpty, WishlistHead, WishlistItems } from '../../../components'
import { useGetAllFromWishlistQuery } from '../../../features/API/wishlistAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { IWishlist } from '../../../ts/interfaces/IWishlist/IWishlist';

const Wishlist: FC = (): JSX.Element => {
    useGetAllFromWishlistQuery();
    const userId = localStorage.getItem("userId") as string;

    const { wishlist } = useAppSelector((state: RootState) => state.wishlist);
    const [ myWishlist, setMyWishlist] = useState<IWishlist[]>([]);

    useEffect(() => {
        const getMyWishlist = wishlist.filter((w) => w.userId === userId);

        setMyWishlist(getMyWishlist);

    }, [wishlist, userId]);

    return (
        <>
        {
            myWishlist.length > 0 ? (
                <div>
                    <div className='p-4 flex justify-between border border-gray-300'>
                        <WishlistHead/>
                    </div>
                    <WishlistItems
                        myWishlist={myWishlist}
                    />
                </div>
            ) : <WishlistEmpty/>
        }
        </>
    )
}

export default Wishlist