import { FC} from 'react'

import { ProductSingleSpecification, ProductSpecificationTitle } from "../../..";
import { IScreen } from '../../../../ts/interfaces/IProduct/IScreen';

interface IProps {
    screen: IScreen;
    memory: {
        ramMemory: string;
        internalMemory: string;
    };
    battery: string;
}

const TabletSpecification: FC<IProps> = ({ screen: { screenResolution, screenDiagonal }, memory: { internalMemory, ramMemory}, battery }): JSX.Element => {
    return (
        <div className='border border-gray-400 w-full mb-6'>
            <ProductSpecificationTitle/>
            <div className='flex flex-col p-6'>
                <ProductSingleSpecification
                    name='RAM Memory:'
                    desc={ramMemory}
                />
                <ProductSingleSpecification
                    name='Internal Memory:'
                    desc={internalMemory}
                />
                <ProductSingleSpecification
                    name='Screen Resolution:'
                    desc={screenResolution!}
                />
                <ProductSingleSpecification
                    name='Screen Diagonal:'
                    desc={screenDiagonal}
                />
                <ProductSingleSpecification
                    name='Battery:'
                    desc={battery}
                />
            </div>
        </div>
    )
}

export default TabletSpecification