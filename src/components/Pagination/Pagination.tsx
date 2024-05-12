import { FC, useContext, Context } from 'react'

import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import "./Pagination.scss"

interface IProps {
    pageCount: number;
    onPageChange: (selected: { selected: number }) => void;
    activePage: number;
}

const Pagination: FC<IProps> = ({ pageCount, onPageChange, activePage }): JSX.Element => { 
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <ReactPaginate
            previousLabel={<BsArrowLeft/>}
            nextLabel={<BsArrowRight/>}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName="pagination-btn"
            previousLinkClassName="prev-btn"
            nextLinkClassName="next-btn"
            nextClassName="next-btn"
            previousClassName="prev-btn"
            disabledClassName="pagination-disabled"
            activeClassName={darkTheme ? "pagination-active-dark" : "pagination-active"}
            forcePage={activePage}
        />
    )
}

export default Pagination