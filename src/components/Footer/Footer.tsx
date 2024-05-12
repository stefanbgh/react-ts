import { FC} from 'react'

import footer from "../../assets/footer.webp";

const Footer: FC = (): JSX.Element => {
    return (
        <div className="pt-8 pb-4 flex justify-center items-center gap-2">
            <div>
                <img width={20} src={footer} alt="img" loading="lazy"/>
            </div>
            <p>Copyright &copy; 2023 ElectroneX. All Rights Reserved.</p>
        </div>
    ) 
}

export default Footer