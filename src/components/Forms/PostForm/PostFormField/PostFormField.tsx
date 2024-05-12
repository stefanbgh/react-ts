import { FC, RefObject } from 'react'

interface IProps {
    titleRef: RefObject<HTMLInputElement>;
}

const PostFormField: FC<IProps> = ({ titleRef }): JSX.Element => {
    return (
        <div className="flex flex-wrap -mx-3">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-xs font-bold mb-2"
						htmlFor="postTitle"
					>
					</label>
					<input
						ref={titleRef}
						className="appearance-none bg-transparent block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="postTitle"
						type="text"
						placeholder="Title"
						required
					/>
				</div>
			</div>
    )
}

export default PostFormField