import { FC} from 'react'

import { ProductSingleSpecification, ProductSpecificationTitle } from "../../..";

interface IProps {
    screen: string;
    ram: string;
    processor: string;
    graphic: string;
    ssd_hdd: string;
}

const LaptopSpecifications: FC<IProps> = ({ screen, ram, processor, graphic, ssd_hdd }): JSX.Element => {
    return (
        <div className='border border-gray-400 w-full mb-6'>
            <ProductSpecificationTitle/>
            <div className='flex flex-col p-6'>
                <ProductSingleSpecification
                    name='Screen Diagonal:'
                    desc={screen}
                />
                <ProductSingleSpecification
                    name='RAM Memory:'
                    desc={ram}
                />
                <ProductSingleSpecification
                    name='Processor:'
                    desc={processor}
                />
                <ProductSingleSpecification
                    name='Graphic Card:'
                    desc={graphic}
                />
                <ProductSingleSpecification
                    name='SSD/HDD:'
                    desc={ssd_hdd}
                />
            </div>
        </div>
    )
}

export default LaptopSpecifications