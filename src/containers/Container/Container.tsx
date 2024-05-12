import { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const Container = ({ children }: IProps) => {
    return (
        <div className="w-[1280px] mx-auto">
            {children}
        </div>
    )
}

export default Container