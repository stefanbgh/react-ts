import { FC} from 'react'

import { IProduct } from '../../../../ts/interfaces/IProduct/IProduct';
import { IScreen } from '../../../../ts/interfaces/IProduct/IScreen';
import PhoneSpecifications from '../PhoneSpecifications/PhoneSpecifications';
import { LaptopSpecifications, TabletSpecifications, TelevisionSpecification } from '../../..';

interface IProps {
    product: IProduct<IScreen | string>;
    category: string;
}

const ProductSpecifications: FC<IProps> = ({ product, category }): JSX.Element => {
    const { camera, battery, memory, screen, ram, processor, graphic, ssd_hdd, digitalTuner, technology, resolution, operatingSystem } = product;

    return (
        <>
            { 
                category === "phones" && (
                    <PhoneSpecifications
                        camera={camera!}
                        battery={battery}
                        memory={memory}
                        screen={screen as IScreen}
                    />
                )
            }
            { 
                category === "tablets" && (
                    <TabletSpecifications
                        battery={battery}
                        memory={memory}
                        screen={screen as IScreen}
                    />
                )
            }
            { 
                category === "laptops" && (
                    <LaptopSpecifications
                        screen={screen as string}
                        ram={ram!}
                        processor={processor!}
                        graphic={graphic!}                        
                        ssd_hdd={ssd_hdd!}
                    />
                )
            }
            { 
                category === "televisions" && (
                    <TelevisionSpecification
                        screen={screen as string}
                        digitalTuner={digitalTuner!}
                        technology={technology!}
                        resolution={resolution!}                        
                        operatingSystem={operatingSystem!}
                    />
                )
            }
        </>
    )
}

export default ProductSpecifications