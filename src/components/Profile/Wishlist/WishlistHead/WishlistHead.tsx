
import { wishlistHeadData } from './wishlistHeadData';

const WishlistHead = () => {
    return (
    <>
        {
            wishlistHeadData.map((wishlistHead) => {
                const { wishlistId, text, width } = wishlistHead;

                return (
                    <div 
                        key={wishlistId} 
                        className={`
                            w-${width}/12
                            ${text === "Details" || text === "Action" ? "flex justify-center" : ""}
                        `}
                    >
                        <p>{text}</p>
                    </div>
                )
            })
        }
    </>
    )
}

export default WishlistHead