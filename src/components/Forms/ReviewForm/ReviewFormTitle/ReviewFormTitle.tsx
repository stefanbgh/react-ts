import { FC, RefObject } from 'react'

interface IProps {
    reviewTitleRef: RefObject<HTMLInputElement>
}

const ReviewFormTitle: FC<IProps> = ({ reviewTitleRef }): JSX.Element => {
    return (
        <div className="w-full px-3">
            <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="reviewTittle"
            >
            </label>
            <input
                ref={reviewTitleRef}
                className="appearance-none bg-transparent block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                id="reviewTittle"
                type="text"
                placeholder="Title"
                required
                autoComplete="off"
            />
        </div>
    )
}
export default ReviewFormTitle