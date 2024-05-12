import { FC} from 'react'

import { ProductSingleSpecification, ProductSpecificationTitle } from "../../..";
import { IScreen } from '../../../../ts/interfaces/IProduct/IScreen';

interface IProps {
    screen: IScreen;
    memory: {
        ramMemory: string;
        internalMemory: string;
    };
    camera: {
        rearCamera: string;
        frontCamera: string;
    };
    battery: string;
}

const PhoneSpecifications: FC<IProps> = ({ screen: { screenType, screenDiagonal }, memory: { internalMemory, ramMemory}, camera: { rearCamera, frontCamera }, battery }): JSX.Element => {
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
                    name='Rear Camera:'
                    desc={rearCamera}
                />
                <ProductSingleSpecification
                    name='Front Camera:'
                    desc={frontCamera}
                />
                <ProductSingleSpecification
                    name='Screen Type:'
                    desc={screenType!}
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

export default PhoneSpecifications