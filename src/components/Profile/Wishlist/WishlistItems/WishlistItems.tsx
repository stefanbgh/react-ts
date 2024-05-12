import { FC} from 'react'

import { WishlistSingleItem } from "../../../../components"
import { IWishlist } from '../../../../ts/interfaces/IWishlist/IWishlist';

interface IProps {
    myWishlist: IWishlist[]
}

const WishlistItems: FC<IProps> = ({ myWishlist }): JSX.Element => {
    return (
        <>
            {
                myWishlist.length > 0 ? (
                    myWishlist.map((wishlist) => {
                        const { wishlistId, articleId, image, articleName, category, price, status } = wishlist;

                        return (
                            <WishlistSingleItem 
                                key={wishlistId}
                                wishlistId={wishlistId}
                                articleId={articleId}
                                image={image}
                                articleName={articleName}
                                category={category}
                                price={price}
                                status={status}
                            />
                        )
                    })
                ) : null
            }
        </>
    )
}

export default WishlistItems