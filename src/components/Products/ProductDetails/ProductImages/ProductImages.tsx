import { FC, useState, useEffect } from 'react'

interface IProps {
    images: string[];
}

const ProductImages: FC<IProps> = ({ images }): JSX.Element => {
    const [ activeImage, setActiveImage] = useState<string>();

    useEffect(() => {
        setActiveImage(images[0]);
    }, [images]);

    const handleActiveImage = (index: number) => setActiveImage(images[index]);

    return (
        <div className='flex gap-4 mb-4'>
            <div className='flex flex-col gap-4 w-1/6 h-full'>
            {
                // eslint-disable-next-line
                images.map((imageURL, index) => (
                    <div 
                        onClick={() => handleActiveImage(index)}
                        key={index} 
                        className='h-28 border border-gray-300 flex justify-center py-2 hover:border hover:border-blue-400 hover:rounded-md hover:shadow-lg transition-all cursor-pointer'
                    >
                        <img className='h-full' src={imageURL} alt="img" loading="lazy"/>
                    </div>
                ))
            }
            </div>
            <div className='w-5/6 border border-gray-400 h-[525px] flex justify-center py-2'>
                <img className='h-full' src={activeImage} alt="img" loading="lazy"/>
            </div>
        </div>
    )
}

export default ProductImages