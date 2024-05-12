import { FC} from 'react'

import { ProductSingleSpecification, ProductSpecificationTitle } from "../../..";

interface IProps {
    screen: string;
    digitalTuner: string;
    technology: string;
    resolution: string;
    operatingSystem: string;
}

const TelevisionSpecifications: FC<IProps> = ({ screen, digitalTuner, technology, resolution, operatingSystem }): JSX.Element => {
    return (
        <div className='border border-gray-400 w-full mb-6'>
            <ProductSpecificationTitle/>
            <div className='flex flex-col p-6'>
                <ProductSingleSpecification
                    name='Screen Diagonal:'
                    desc={screen}
                />
                <ProductSingleSpecification
                    name='Digital Tuner:'
                    desc={digitalTuner}
                />
                <ProductSingleSpecification
                    name='Technology:'
                    desc={technology}
                />
                <ProductSingleSpecification
                    name='Resolution:'
                    desc={resolution}
                />
                <ProductSingleSpecification
                    name='Operating System:'
                    desc={operatingSystem}
                />
            </div>
        </div>
    )
}

export default TelevisionSpecifications