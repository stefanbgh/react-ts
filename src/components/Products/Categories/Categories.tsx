import { FC} from 'react'

import { Routes } from '../../../router/Routes';
import { Category } from '../../../components'

import phones from "../../../assets/phones.webp"
import tablets from "../../../assets/tablets.webp"
import laptops from "../../../assets/laptops.webp"
import televisions from "../../../assets/televisions.webp"
import comingSoon from "../../../assets/coming-soon.webp"

const Categories: FC = (): JSX.Element => {
    return (
        <div className='pt-6 w-full h-[600px] grid grid-cols-6 grid-rows-6 gap-4'>
            <div className='col-span-2 row-span-2'>
                <Category
                    route={`${Routes.PRODUCTS}${Routes.PHONES}`}
                    categoryName='Phones'
                    image={phones}
                />
            </div>
            <div className='col-span-2 row-span-2'>
                <Category
                    route={`${Routes.PRODUCTS}${Routes.TABLETS}`}
                    categoryName='Tablets'
                    image={tablets}
                />
            </div>
            <div className='col-span-2 row-span-3'>
                <Category
                    route={`${Routes.PRODUCTS}${Routes.LAPTOPS}`}
                    categoryName='Laptops'
                    image={laptops}
                />
            </div>
            <div className='col-span-4 row-span-5'>
                <Category
                    route={`${Routes.PRODUCTS}${Routes.TELEVISIONS}`}
                    categoryName='Televisions'
                    image={televisions}
                />
            </div>
            <div className='col-span-2 row-span-4'>
                <Category
                    route={`${Routes.PRODUCTS}${Routes.OTHERS}`}
                    categoryName='Others'
                    image={comingSoon}
                />
            </div>
        </div>
    )
}

export default Categories