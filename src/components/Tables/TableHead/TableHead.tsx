import { FC} from 'react'

interface IProps {
    colOne: string;
    colTwo: string;
    colThree: string;
    colFour: string;
}

const TableHead: FC<IProps> = ({ colOne, colTwo, colThree, colFour }): JSX.Element => {
    return (
        <thead className="text-xs text-blue-400 uppercase bg-gray-50 dark:bg-gray-200 dark:text-blue-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {colOne}
                </th>
                <th scope="col" className="px-6 py-3">
                    {colTwo}
                </th>
                <th scope="col" className="px-6 py-3">
                    {colThree}
                </th>
                <th scope="col" className="px-6 py-3">
                    {colFour}
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
  )
}

export default TableHead