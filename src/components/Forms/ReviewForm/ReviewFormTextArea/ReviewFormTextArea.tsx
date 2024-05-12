import { FC, RefObject } from 'react'

interface IProps {
    reviewTextRef: RefObject<HTMLTextAreaElement>;
}

const ReviewFormText: FC<IProps> = ({ reviewTextRef }): JSX.Element => {
    return (
        <div className="w-full px-3">
            <label
                className="block tracking-wide text-xs font-bold mb-2"
                htmlFor="reviewContent"
            >
            </label>
            <textarea
                ref={reviewTextRef}
                className="appearance-none bg-transparent resize-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                id="reviewContent"
                rows={6}
                placeholder="Enter your reviews"
                required
            />
        </div>
    )
}

export default ReviewFormText