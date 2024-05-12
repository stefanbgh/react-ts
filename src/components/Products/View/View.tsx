import { FC} from 'react'

import { BsFillGridFill, BsListUl } from 'react-icons/bs';
import "./View.scss"

interface IProps {
    activeView: string;
    handleChangeProductsView: (view: "grid" | "list") => void;
}

const View: FC<IProps> = ({ activeView, handleChangeProductsView }): JSX.Element => {
    return (
        <div className='flex gap-2'>
            <button 
                onClick={() => handleChangeProductsView("grid")}
                className={`
                    ${activeView === "grid" ? "view-active" : "view"}  
                `}
            >
                <BsFillGridFill size={20} className='view-icon'/>
            </button>
            <button 
                onClick={() => handleChangeProductsView("list")}
                className={`
                    ${activeView === "list" ? "view-active" : "view"}
                    border p-1
                `}
            >
                <BsListUl size={20} className='view-icon'/>
            </button>
        </div>
    )
}

export default View